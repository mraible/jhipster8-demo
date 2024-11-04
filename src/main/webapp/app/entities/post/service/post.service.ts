import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IPost, NewPost } from '../post.model';

export type PartialUpdatePost = Partial<IPost> & Pick<IPost, 'id'>;

type RestOf<T extends IPost | NewPost> = Omit<T, 'date'> & {
  date?: string | null;
};

export type RestPost = RestOf<IPost>;

export type NewRestPost = RestOf<NewPost>;

export type PartialUpdateRestPost = RestOf<PartialUpdatePost>;

export type EntityResponseType = HttpResponse<IPost>;
export type EntityArrayResponseType = HttpResponse<IPost[]>;

@Injectable({ providedIn: 'root' })
export class PostService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/posts');

  create(post: NewPost): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(post);
    return this.http.post<RestPost>(this.resourceUrl, copy, { observe: 'response' }).pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(post: IPost): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(post);
    return this.http
      .put<RestPost>(`${this.resourceUrl}/${this.getPostIdentifier(post)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(post: PartialUpdatePost): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(post);
    return this.http
      .patch<RestPost>(`${this.resourceUrl}/${this.getPostIdentifier(post)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestPost>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestPost[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getPostIdentifier(post: Pick<IPost, 'id'>): number {
    return post.id;
  }

  comparePost(o1: Pick<IPost, 'id'> | null, o2: Pick<IPost, 'id'> | null): boolean {
    return o1 && o2 ? this.getPostIdentifier(o1) === this.getPostIdentifier(o2) : o1 === o2;
  }

  addPostToCollectionIfMissing<Type extends Pick<IPost, 'id'>>(
    postCollection: Type[],
    ...postsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const posts: Type[] = postsToCheck.filter(isPresent);
    if (posts.length > 0) {
      const postCollectionIdentifiers = postCollection.map(postItem => this.getPostIdentifier(postItem));
      const postsToAdd = posts.filter(postItem => {
        const postIdentifier = this.getPostIdentifier(postItem);
        if (postCollectionIdentifiers.includes(postIdentifier)) {
          return false;
        }
        postCollectionIdentifiers.push(postIdentifier);
        return true;
      });
      return [...postsToAdd, ...postCollection];
    }
    return postCollection;
  }

  protected convertDateFromClient<T extends IPost | NewPost | PartialUpdatePost>(post: T): RestOf<T> {
    return {
      ...post,
      date: post.date?.toJSON() ?? null,
    };
  }

  protected convertDateFromServer(restPost: RestPost): IPost {
    return {
      ...restPost,
      date: restPost.date ? dayjs(restPost.date) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestPost>): HttpResponse<IPost> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestPost[]>): HttpResponse<IPost[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}

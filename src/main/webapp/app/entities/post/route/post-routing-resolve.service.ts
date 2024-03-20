import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IPost } from '../post.model';
import { PostService } from '../service/post.service';

export const postResolve = (route: ActivatedRouteSnapshot): Observable<null | IPost> => {
  const id = route.params['id'];
  if (id) {
    return inject(PostService)
      .find(id)
      .pipe(
        mergeMap((post: HttpResponse<IPost>) => {
          if (post.body) {
            return of(post.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default postResolve;

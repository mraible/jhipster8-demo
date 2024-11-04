import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/service/user.service';
import { IBlog } from '../blog.model';
import { BlogService } from '../service/blog.service';
import { BlogFormService, BlogFormGroup } from './blog-form.service';

@Component({
  standalone: true,
  selector: 'jhi-blog-update',
  templateUrl: './blog-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class BlogUpdateComponent implements OnInit {
  isSaving = false;
  blog: IBlog | null = null;

  usersSharedCollection: IUser[] = [];

  protected blogService = inject(BlogService);
  protected blogFormService = inject(BlogFormService);
  protected userService = inject(UserService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: BlogFormGroup = this.blogFormService.createBlogFormGroup();

  compareUser = (o1: IUser | null, o2: IUser | null): boolean => this.userService.compareUser(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ blog }) => {
      this.blog = blog;
      if (blog) {
        this.updateForm(blog);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const blog = this.blogFormService.getBlog(this.editForm);
    if (blog.id !== null) {
      this.subscribeToSaveResponse(this.blogService.update(blog));
    } else {
      this.subscribeToSaveResponse(this.blogService.create(blog));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IBlog>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(blog: IBlog): void {
    this.blog = blog;
    this.blogFormService.resetForm(this.editForm, blog);

    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing<IUser>(this.usersSharedCollection, blog.user);
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing<IUser>(users, this.blog?.user)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  }
}

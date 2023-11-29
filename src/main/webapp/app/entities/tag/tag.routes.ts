import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { TagComponent } from './list/tag.component';
import { TagDetailComponent } from './detail/tag-detail.component';
import { TagUpdateComponent } from './update/tag-update.component';
import TagResolve from './route/tag-routing-resolve.service';

const tagRoute: Routes = [
  {
    path: '',
    component: TagComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TagDetailComponent,
    resolve: {
      tag: TagResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TagUpdateComponent,
    resolve: {
      tag: TagResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TagUpdateComponent,
    resolve: {
      tag: TagResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default tagRoute;

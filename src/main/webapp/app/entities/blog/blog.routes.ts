import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { BlogComponent } from './list/blog.component';
import { BlogDetailComponent } from './detail/blog-detail.component';
import { BlogUpdateComponent } from './update/blog-update.component';
import BlogResolve from './route/blog-routing-resolve.service';

const blogRoute: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: BlogDetailComponent,
    resolve: {
      blog: BlogResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: BlogUpdateComponent,
    resolve: {
      blog: BlogResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: BlogUpdateComponent,
    resolve: {
      blog: BlogResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default blogRoute;

import { IUser } from 'app/entities/user/user.model';

export interface IBlog {
  id: number;
  name?: string | null;
  handle?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewBlog = Omit<IBlog, 'id'> & { id: null };

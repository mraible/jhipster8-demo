import dayjs from 'dayjs/esm';
import { IBlog } from 'app/entities/blog/blog.model';
import { ITag } from 'app/entities/tag/tag.model';

export interface IPost {
  id: number;
  title?: string | null;
  content?: string | null;
  date?: dayjs.Dayjs | null;
  blog?: IBlog | null;
  tags?: ITag[] | null;
}

export type NewPost = Omit<IPost, 'id'> & { id: null };

import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 9086,
  title: 'from drat aide',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-19T21:56'),
};

export const sampleWithPartialData: IPost = {
  id: 19478,
  title: 'supposing',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-19T20:01'),
};

export const sampleWithFullData: IPost = {
  id: 12763,
  title: 'gee down ruddy',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-19T16:51'),
};

export const sampleWithNewData: NewPost = {
  title: 'as yuck predict',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-20T00:43'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 30552,
  title: 'bah sweaty monotheism',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-19T17:17'),
};

export const sampleWithPartialData: IPost = {
  id: 21310,
  title: 'revise',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-19T18:51'),
};

export const sampleWithFullData: IPost = {
  id: 32025,
  title: 'decent marines hairy',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-20T05:25'),
};

export const sampleWithNewData: NewPost = {
  title: 'regarding',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-19T17:46'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

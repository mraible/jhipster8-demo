import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 3944,
  name: 'from',
  handle: 'furthermore enraged stall',
};

export const sampleWithPartialData: IBlog = {
  id: 19617,
  name: 'besides',
  handle: 'wiry more chap',
};

export const sampleWithFullData: IBlog = {
  id: 24597,
  name: 'even scarecrow brr',
  handle: 'towards normalise',
};

export const sampleWithNewData: NewBlog = {
  name: 'fear',
  handle: 'if keenly a',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

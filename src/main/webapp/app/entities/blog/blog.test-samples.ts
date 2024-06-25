import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 22076,
  name: 'phew but ew',
  handle: 'outside below drat',
};

export const sampleWithPartialData: IBlog = {
  id: 11734,
  name: 'super with',
  handle: 'hunter',
};

export const sampleWithFullData: IBlog = {
  id: 27582,
  name: 'because admirable',
  handle: 'until',
};

export const sampleWithNewData: NewBlog = {
  name: 'judgementally',
  handle: 'where',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

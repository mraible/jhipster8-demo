import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 31666,
  name: 'pfft',
  handle: 'rudely evil provided',
};

export const sampleWithPartialData: IBlog = {
  id: 19548,
  name: 'through conduct walnut',
  handle: 'when',
};

export const sampleWithFullData: IBlog = {
  id: 23764,
  name: 'wonderfully',
  handle: 'spear',
};

export const sampleWithNewData: NewBlog = {
  name: 'above whoa girl',
  handle: 'intention nurse behind',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

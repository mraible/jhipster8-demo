import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 572,
  name: 'summarise furthermore',
  handle: 'right',
};

export const sampleWithPartialData: IBlog = {
  id: 20696,
  name: 'highly orient',
  handle: 'kissingly vice',
};

export const sampleWithFullData: IBlog = {
  id: 15148,
  name: 'appliance',
  handle: 'gnash tarragon wherever',
};

export const sampleWithNewData: NewBlog = {
  name: 'considering',
  handle: 'pish proceed dreamily',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

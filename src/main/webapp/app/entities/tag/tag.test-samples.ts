import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 21000,
  name: 'weakly',
};

export const sampleWithPartialData: ITag = {
  id: 22743,
  name: 'um publicise to',
};

export const sampleWithFullData: ITag = {
  id: 28120,
  name: 'heckle rumour latency',
};

export const sampleWithNewData: NewTag = {
  name: 'collide fooey psst',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

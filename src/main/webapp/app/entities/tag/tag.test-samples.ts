import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 24942,
  name: 'steel than',
};

export const sampleWithPartialData: ITag = {
  id: 21784,
  name: 'ack amid retention',
};

export const sampleWithFullData: ITag = {
  id: 2781,
  name: 'passport amongst hence',
};

export const sampleWithNewData: NewTag = {
  name: 'darn unless',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

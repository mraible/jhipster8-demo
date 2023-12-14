import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 8147,
  name: 'toward',
};

export const sampleWithPartialData: ITag = {
  id: 4157,
  name: 'tragic modeling round',
};

export const sampleWithFullData: ITag = {
  id: 15662,
  name: 'mastermind towel',
};

export const sampleWithNewData: NewTag = {
  name: 'like spotted',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

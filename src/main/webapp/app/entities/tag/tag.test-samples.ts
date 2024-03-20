import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 31136,
  name: 'fast airfield',
};

export const sampleWithPartialData: ITag = {
  id: 24921,
  name: 'how',
};

export const sampleWithFullData: ITag = {
  id: 4471,
  name: 'mid tensely',
};

export const sampleWithNewData: NewTag = {
  name: 'meh corrupt',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

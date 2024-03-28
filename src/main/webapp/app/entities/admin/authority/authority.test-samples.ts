import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'fea6c5a7-d879-4be9-9b8f-6ef9fdf1612e',
};

export const sampleWithPartialData: IAuthority = {
  name: '307b8f1c-5253-4355-be69-5560656b4164',
};

export const sampleWithFullData: IAuthority = {
  name: 'efb4ecba-b4de-4e61-9b8d-8afcc69377bb',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

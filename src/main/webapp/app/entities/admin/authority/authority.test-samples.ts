import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '61906042-6ee6-45c4-bf72-c83b3cf1e2b3',
};

export const sampleWithPartialData: IAuthority = {
  name: 'abac258b-003e-44e8-84d0-3ea0ba6c7a7e',
};

export const sampleWithFullData: IAuthority = {
  name: '07626ec0-ba40-4b16-b8f0-be813194f72b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

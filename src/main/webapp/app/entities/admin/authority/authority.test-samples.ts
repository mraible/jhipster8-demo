import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '60159809-6001-44d2-b962-edec665cc245',
};

export const sampleWithPartialData: IAuthority = {
  name: '97b2ecb8-d34b-453c-bc2f-91ae72ab939f',
};

export const sampleWithFullData: IAuthority = {
  name: 'aabaa5c7-2550-48db-9f06-023ae24fe285',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

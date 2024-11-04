import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 19478,
  login: 'frGtN',
};

export const sampleWithPartialData: IUser = {
  id: 8478,
  login: 'nPd@',
};

export const sampleWithFullData: IUser = {
  id: 9324,
  login: 'mW-@jAK',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

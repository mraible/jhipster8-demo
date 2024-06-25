import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 32020,
  login: '$@lkrvWh\\)xwoxd\\=-eP\\ZmO',
};

export const sampleWithPartialData: IUser = {
  id: 23502,
  login: '_',
};

export const sampleWithFullData: IUser = {
  id: 13954,
  login: '{2@Ghtq\\te4F\\Kj7m7qh\\~Q\\~Z',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

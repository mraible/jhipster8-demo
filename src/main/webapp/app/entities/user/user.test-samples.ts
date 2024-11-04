import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 19478,
  login: 'tNmP@',
};

export const sampleWithPartialData: IUser = {
  id: 3800,
  login: 'kOLPwt@EYq\\9PV\\@b\\{T-tex',
};

export const sampleWithFullData: IUser = {
  id: 8057,
  login: 'rz6{~@B8uVyL\\(-w\\@x10TeJ\\yD\\qwGR\\KB',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

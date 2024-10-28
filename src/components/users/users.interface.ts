import { Dispatch, SetStateAction } from 'react';

export enum StatusUser {
  ACTIVE = 1,
  INACTIVE = 2,
}

export interface IUserContext {
  user: RegisteredUser;
  setUser: Dispatch<SetStateAction<RegisteredUser>>;
}

export type UserId = number;

export type UnregisteredUser = {
  name: string;
  email: string;
  phone: string;
  website: string;
  status: StatusUser;
};

export type RegisteredUser = {
  id: UserId;
  name: string;
  email: string;
  phone: string;
  website: string;
  status: StatusUser;
};

export type UserId = number;
export enum StatusUser {
  ACTIVE = 1,
  INACTIVE = 2,
}
export interface User {
  id?: UserId;
  name: string;
  email: string;
  phone: string;
  website: string;
  status: StatusUser;
}

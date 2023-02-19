export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  token?: string;
  isAdmin: boolean;
}
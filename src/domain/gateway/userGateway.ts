import { IUser } from "@domain/model/user";

export default interface UserGateway {
  createUser(user: IUser): Promise<void>;
  getUser(userId: string): Promise<IUser>;
  listUsers(): Promise<IUser[]>;
}
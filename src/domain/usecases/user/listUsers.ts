import { IUser } from "@domain/model/user";

export default interface IListUsers {
  execute(): Promise<IUser[]>
}
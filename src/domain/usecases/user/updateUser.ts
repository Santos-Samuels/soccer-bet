import { IUser } from "@domain/model/user";

export default interface IUpdateUser {
  execute(user: IUser): Promise<void>;
}

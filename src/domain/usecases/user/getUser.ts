import { IUser } from "@domain/model/user";

export default interface IGetUser {
  execute(userId: string): Promise<IUser>
}
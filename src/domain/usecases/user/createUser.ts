import { IInputUser } from "@data/dto/input/user";
import { IUser } from "@domain/model/user";

export default interface ICreateUser {
  execute(input: IInputUser): Promise<IUser>
}
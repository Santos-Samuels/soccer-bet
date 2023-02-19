import { IInputUserLogin } from "@data/dto/input/user";
import { IUser } from "@domain/model/user";

export default interface ILoginUser {
  execute(input: IInputUserLogin): Promise<IUser>
}
import { IInputUserLogin } from "@data/dto/input/user";
import { IUser } from "@domain/model/user";
import RequestStatus from "@domain/requestStatus/requestStatus";
import ILoginUser from "@domain/usecases/user/loginUser";
import UserHttpGateway from "@gateway/userHttpGateway";

export class LoginUserUseCase implements ILoginUser {
  private userGateway: UserHttpGateway;
  private errorMessage = ""

  constructor(_userGateway: UserHttpGateway) {
    this.userGateway = _userGateway;
  }

  async execute(input: IInputUserLogin): Promise<IUser> {
    const requestStatus = new RequestStatus();

    try {
      const user = await this.userGateway.loginUser(input.email);

      if (!user) {
        this.errorMessage = "Usuário não existe."
        throw new Error();
      }

      if (user.password !== input.password) {
        this.errorMessage = "Senha incorreta"
        throw new Error();
      }

      delete user.password
      return { ...user, token: "fakeToken" };
    } catch (error) {
      if (this.errorMessage) throw new Error(this.errorMessage);

      throw requestStatus.serverError
    }
  }
}

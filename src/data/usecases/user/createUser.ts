import { IInputUser } from "@data/dto/input/user";
import { IUser } from "@domain/model/user";
import RequestStatus from "@domain/requestStatus/requestStatus";
import ICreateUser from "@domain/usecases/user/createUser";
import UserHttpGateway from "@gateway/userHttpGateway";
import { v4 as uuidv4 } from "uuid";

export class CreateUserUseCase implements ICreateUser {
  private userGateway: UserHttpGateway;

  constructor(_userGateway: UserHttpGateway) {
    this.userGateway = _userGateway;
  }

  async execute(input: IInputUser): Promise<IUser> {
    const requestStatus = new RequestStatus();
    delete input.confirmPassword

    const user: IUser = {
      ...input,
      id: uuidv4(),
      isAdmin: false
    };

    try {
      const users = await this.userGateway.listUsers();

      if (users.some((item) => item.email === user.email))
        throw requestStatus.badRequest;

      await this.userGateway.createUser(user);
      return user;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

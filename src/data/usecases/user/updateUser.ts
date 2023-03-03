import { IUser } from "@domain/model/user";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IUpdateUser from "@domain/usecases/user/updateUser";
import UserHttpGateway from "@gateway/userHttpGateway";

export class UpdateUserUseCase implements IUpdateUser {
  private userGateway: UserHttpGateway;

  constructor(_userGateway: UserHttpGateway) {
    this.userGateway = _userGateway;
  }

  async execute(user: IUser): Promise<void> {
    const requestStatus = new RequestStatus();

    try {
      await this.userGateway.updateUser(user);
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}
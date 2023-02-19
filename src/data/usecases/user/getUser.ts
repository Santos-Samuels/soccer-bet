import { IUser } from "@domain/model/user";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IGetUser from "@domain/usecases/user/getUser";
import UserHttpGateway from "@gateway/userHttpGateway";

export class GetUserUseCase implements IGetUser {
  private userGateway: UserHttpGateway;

  constructor(_userGateway: UserHttpGateway) {
    this.userGateway = _userGateway;
  }

  async execute(userId: string): Promise<IUser> {
    const requestStatus = new RequestStatus();

    try {
      const user = await this.userGateway.getUser(userId);
      return user;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

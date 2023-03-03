import { IUser } from "@domain/model/user";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IListUsers from "@domain/usecases/user/listUsers";
import UserHttpGateway from "@gateway/userHttpGateway";

export class ListUsersUseCase implements IListUsers {
  private userGateway: UserHttpGateway;

  constructor(_userGateway: UserHttpGateway) {
    this.userGateway = _userGateway;
  }

  async execute(): Promise<IUser[]> {
    const requestStatus = new RequestStatus();
    
    try {
      const users = await this.userGateway.listUsers();
      return users;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}
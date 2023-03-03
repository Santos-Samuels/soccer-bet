import { IResult } from "@domain/model/result";
import RequestStatus from "@domain/requestStatus/requestStatus";
import UpdateUsersScore from "@domain/usecases/user/updateUsersScore";
import BetHttpGateway from "@gateway/betHttpGateway";
import UserHttpGateway from "@gateway/userHttpGateway";

export class UpdateUsersScoreUseCase implements UpdateUsersScore {
  private userGateway: UserHttpGateway;
  private betsGateway: BetHttpGateway;

  constructor(_userGateway: UserHttpGateway, _betsGateway: BetHttpGateway) {
    this.userGateway = _userGateway;
    this.betsGateway = _betsGateway;
  }

  async execute(result: IResult): Promise<void> {
    const requestStatus = new RequestStatus();

    try {
      const users = await this.userGateway.listUsers();

      for (const user of users) {
        const userBets = await this.betsGateway.listUserBets(
          user.id,
          result.matchId
        );

        userBets.forEach((bet) => {
          if (bet.hint.toString() === result.hint.toString()) {
            user.score += 1;
          }
        });

        await this.userGateway.updateUser(user);
      }
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

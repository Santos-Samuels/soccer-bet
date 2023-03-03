import { IBet } from "@domain/model/bet";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IListUserBets from "@domain/usecases/bet/listUserBets";
import BetHttpGateway from "@gateway/betHttpGateway";

export class ListUserBetsUseCase implements IListUserBets {
  private betsGateway: BetHttpGateway;
  
  constructor(_betsGateway: BetHttpGateway) {
    this.betsGateway = _betsGateway;
  }

  execute(userId: string, matchId?: string): Promise<IBet[]> {
    const requestStatus = new RequestStatus();

    try {
      const bets = this.betsGateway.listUserBets(userId, matchId);
      return bets;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

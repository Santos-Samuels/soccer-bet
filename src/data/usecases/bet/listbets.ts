import { IBet } from "@domain/model/bet";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IListBets from "@domain/usecases/bet/listBets";
import BetHttpGateway from "@gateway/betHttpGateway";

export class ListBetsUseCase implements IListBets {
  private betGateway: BetHttpGateway;

  constructor(_betGateway: BetHttpGateway) {
    this.betGateway = _betGateway;
  }

  async execute(): Promise<IBet[]> {
    const requestStatus = new RequestStatus();

    try {
      const bets = await this.betGateway.listBets();
      return bets;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

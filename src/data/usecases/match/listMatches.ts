import { IMatch } from "@domain/model/match";
import RequestStatus from "@domain/requestStatus/requestStatus";
import MatchHttpGateway from "@gateway/matchHttpGateway";
import IListMatches from "@domain/usecases/listMatches"

export class ListMatchesUseCase implements IListMatches {
  private matchGateway: MatchHttpGateway;

  constructor(_matchGateway: MatchHttpGateway) {
    this.matchGateway = _matchGateway;
  }

  async execute(): Promise<IMatch[]> {
    const requestStatus = new RequestStatus();

    try {
      const matches = await this.matchGateway.listMatches();
      return matches;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

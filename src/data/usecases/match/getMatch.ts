import { IMatch } from "@domain/model/match";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IGetMatch from "@domain/usecases/match/getMatch";
import MatchHttpGateway from "@gateway/matchHttpGateway";

export class GetMatchUseCase implements IGetMatch {
  private matchGateway: MatchHttpGateway;

  constructor(_matchGateway: MatchHttpGateway) {
    this.matchGateway = _matchGateway;
  }

  async execute(matchId: string): Promise<IMatch> {
    const requestStatus = new RequestStatus();

    try {
      const match = await this.matchGateway.getMatch(matchId);
      return match;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

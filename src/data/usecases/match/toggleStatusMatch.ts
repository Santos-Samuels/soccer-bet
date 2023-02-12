import { IMatch } from "@domain/model/match";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IToggleStatusMatch from "@domain/usecases/toggleStatusMatch";
import MatchHttpGateway from "@gateway/matchHttpGateway";

export class ToggleStatusMatchUseCase implements IToggleStatusMatch {
  private matchGateway: MatchHttpGateway;
  constructor(_matchGateway: MatchHttpGateway) {
    this.matchGateway = _matchGateway;
  }

  async execute(matchId: string): Promise<IMatch> {
    const requestStatus = new RequestStatus();

    try {
      const match = await this.matchGateway.getMatch(matchId);
      const updatedMatch = {
        ...match,
        isActive: !match.isActive,
      }

      await this.matchGateway.toggleStatusMatch(updatedMatch);
      return updatedMatch;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

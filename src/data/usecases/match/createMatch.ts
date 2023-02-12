import { v4 as uuidv4 } from "uuid";
import { IInputMatch } from "@data/dto/input/match";
import { IMatch } from "@domain/model/match";
import RequestStatus from "@domain/requestStatus/requestStatus";
import MatchHttpGateway from "@gateway/matchHttpGateway";
import ICreateMatch from "@domain/usecases/createMatch";

export class CreateMatchUseCase implements ICreateMatch {
  private matchGateway: MatchHttpGateway;

  constructor(_matchGateway: MatchHttpGateway) {
    this.matchGateway = _matchGateway;
  }

  async execute(inputMatch: IInputMatch): Promise<IMatch> {
    const requestStatus = new RequestStatus();
    const match: IMatch = { ...inputMatch, id: uuidv4(), isActive: true };

    try {
      const matches = await this.matchGateway.listMatches();

      if (
        matches.some(
          (item) =>
            item.team1 === match.team1 &&
            item.team2 === match.team2 &&
            item.group === match.group
        )
      ) {
        throw requestStatus.badRequest;
      }

      await this.matchGateway.createMatch(match);
      return match;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

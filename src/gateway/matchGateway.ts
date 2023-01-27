import { IMatch } from "../domain/model/match";

export default interface MatchGateway {
  listMatches(): Promise<IMatch[]>;
  addMatch(match: IMatch): Promise<void>;
  updateMatch(match: Omit<IMatch, "id">, matchId: string): Promise<void>;
  removeMatch(matchId: string): Promise<void>;
}
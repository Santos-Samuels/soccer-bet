import { IMatch } from "../model/match";

export default interface MatchGateway {
  createMatch(match: IMatch): Promise<void>;
  getMatch(matchId: string): Promise<IMatch>;
  listMatches(): Promise<IMatch[]>;
  toggleStatusMatch(match: IMatch): Promise<void>;
}
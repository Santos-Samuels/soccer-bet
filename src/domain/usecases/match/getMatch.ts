import { IMatch } from "@domain/model/match";

export default interface IGetMatch {
  execute(matchId: string): Promise<IMatch>
}
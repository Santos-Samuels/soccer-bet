import { IMatch } from "@domain/model/match";

export default interface IToggleStatusMatch {
  execute(matchId: string): Promise<IMatch>
}
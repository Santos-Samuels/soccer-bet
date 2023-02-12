import { IMatch } from "../model/match";

export default interface IToggleStatusMatch {
  execute(matchId: string): Promise<IMatch>
}
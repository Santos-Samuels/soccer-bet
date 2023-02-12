import { IMatch } from "../model/match";

export default interface IListMatches {
  execute(): Promise<IMatch[]>
}
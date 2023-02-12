import { IMatch } from "@domain/model/match";

export default interface IListMatches {
  execute(): Promise<IMatch[]>
}
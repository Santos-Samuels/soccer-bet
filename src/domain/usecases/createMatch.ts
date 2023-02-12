import { IInputMatch } from "@data/dto/input/match";
import { IMatch } from "../model/match";

export default interface ICreateMatch {
  execute(input: IInputMatch): Promise<IMatch>
}
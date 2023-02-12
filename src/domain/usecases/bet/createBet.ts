import { IInputBet } from "@data/dto/input/bet";
import { IBet } from "@domain/model/bet";

export default interface ICreateBet {
  execute(input: IInputBet): Promise<IBet>
}
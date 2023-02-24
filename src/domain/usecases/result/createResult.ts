import { IInputResult } from "@data/dto/input/result";
import { IResult } from "../../model/result";

export default interface ICreateResult {
  execute(input: IInputResult): Promise<IResult>
}
import { IResult } from "../../model/result";

export default interface IGetResult {
  execute(resultId: string): Promise<IResult>
}
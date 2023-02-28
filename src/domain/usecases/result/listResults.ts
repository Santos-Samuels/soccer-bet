import { IResult } from "../../model/result";

export default interface IListResults {
  execute(): Promise<IResult[]>
}
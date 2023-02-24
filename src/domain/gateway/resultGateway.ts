import { IResult } from "@domain/model/result";

export default interface ResultGateway {
  createResult(result: IResult): Promise<void>;
  getResult(resultId: string): Promise<IResult>;
  listResults(): Promise<IResult[]>;
}
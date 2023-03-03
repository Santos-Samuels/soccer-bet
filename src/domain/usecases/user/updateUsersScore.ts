import { IResult } from "@domain/model/result";

export default interface UpdateUsersScore {
  execute(result: IResult): Promise<void>
}
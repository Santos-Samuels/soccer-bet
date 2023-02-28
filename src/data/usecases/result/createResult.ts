import { v4 as uuidv4 } from "uuid";
import RequestStatus from "@domain/requestStatus/requestStatus";
import ICreateResult from "@domain/usecases/result/createResult";
import ResultHttpGateway from "@gateway/resultHttpGateway";
import { IInputResult } from "@data/dto/input/result";
import { IResult } from "@domain/model/result";

export class CreateResultUseCase implements ICreateResult {
  private resultGateway: ResultHttpGateway;

  constructor(_resultGateway: ResultHttpGateway) {
    this.resultGateway = _resultGateway;
  }

  async execute(input: IInputResult): Promise<IResult> {
    const requestStatus = new RequestStatus();
    const result: IResult = { ...input, id: uuidv4() };

    try {
      const results = await this.resultGateway.listResults();

      if (results.some((item) => item.matchId === result.matchId)) {
        throw requestStatus.badRequest;
      }

      await this.resultGateway.createResult(result);
      return result;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

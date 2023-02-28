import { IResult } from "@domain/model/result";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IGetResult from "@domain/usecases/result/getResult";
import ResultHttpGateway from "@gateway/resultHttpGateway";

export class GetResultUseCase implements IGetResult {
  private resultGateway: ResultHttpGateway;

  constructor(_resultGateway: ResultHttpGateway) {
    this.resultGateway = _resultGateway;
  }

  async execute(resultId: string): Promise<IResult> {
    const requestStatus = new RequestStatus();

    try {
      const match = await this.resultGateway.getResult(resultId);
      return match;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

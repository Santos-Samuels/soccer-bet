import { IResult } from "@domain/model/result";
import RequestStatus from "@domain/requestStatus/requestStatus";
import IListResults from "@domain/usecases/result/listResults";
import ResultHttpGateway from "@gateway/resultHttpGateway";

export class ListResultsUseCase implements IListResults {
  private resultGateway: ResultHttpGateway;

  constructor(_resultGateway: ResultHttpGateway) {
    this.resultGateway = _resultGateway;
  }

  async execute(): Promise<IResult[]> {
    const requestStatus = new RequestStatus();

    try {
      const results = await this.resultGateway.listResults();
      return results;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

import { HttpClient } from "@infra/http/httpClient";
import { baseUrl } from "../../API/baseUrl"
import ResultGateway from "@domain/gateway/resultGateway";
import { IResult } from "@domain/model/result";

export default class ResultHttpGateway implements ResultGateway {
  constructor(readonly httpClient: HttpClient) {}

  async createResult(result: IResult): Promise<void> {
    await this.httpClient.post(`${baseUrl}/results`, result)
    return
  }

  async getResult(resultId: string): Promise<IResult> {
    return await this.httpClient.get(`${baseUrl}/results/${resultId}`) 
  }

  async listResults(): Promise<IResult[]> {
    return await this.httpClient.get(`${baseUrl}/results`)
  }

  // async createMatch(match: IMatch): Promise<void> {
  //   await this.httpClient.post(`${baseUrl}/matches`, match)
  //   return;
  // }
}

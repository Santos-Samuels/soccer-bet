import BetGateway from "@domain/gateway/betGateway";
import { IBet } from "@domain/model/bet";
import { HttpClient } from "@infra/http/httpClient";
import { baseUrl } from "../../API/baseUrl";

export default class BetHttpGateway implements BetGateway {
  constructor(readonly httpClient: HttpClient) {}

  async createBet(bet: IBet): Promise<void> {
    await this.httpClient.post(`${baseUrl}/bets`, bet);
    return;
  }

  async getBet(betId: string): Promise<IBet> {
    return await this.httpClient.get(`${baseUrl}/bets/${betId}`);
  }

  async listBets(): Promise<IBet[]> {
    return await this.httpClient.get(`${baseUrl}/bets`);
  }
}

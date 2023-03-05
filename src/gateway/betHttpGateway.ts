import BetGateway from "@domain/gateway/betGateway";
import { IBet } from "@domain/model/bet";
import { HttpClient } from "@infra/http/httpClient";
import { baseUrl } from "../../API/baseUrl";

export default class BetHttpGateway implements BetGateway {
  constructor(readonly httpClient: HttpClient) {}

  async listUserBets(userId: string, matchId?: string): Promise<IBet[]> {
    return await this.httpClient.get<IBet[]>(
      `${baseUrl}/bets?userId=${userId}${matchId ? `&matchId=${matchId}` : ""}`
    );
  }

  async createBet(bet: IBet): Promise<void> {
    await this.httpClient.post(`${baseUrl}/bets`, bet);
    return;
  }

  async getBet(betId: string): Promise<IBet> {
    return await this.httpClient.get(`${baseUrl}/bets/${betId}`);
  }

  async listBets(userId?: string): Promise<IBet[]> {
    return await this.httpClient.get(`${baseUrl}/bets${userId ? `?userId=${userId}` : ""}`);
  }
}

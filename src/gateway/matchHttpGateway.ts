import { IMatch } from "../domain/model/match";
import { HttpClient } from "../infra/http/httpClient";
import MatchGateway from "./MatchGateway";

export default class MatchHttpGateway implements MatchGateway {

  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async listMatches(): Promise<IMatch[]> {
    return await this.httpClient.get(`${this.baseUrl}/matches`)
  }

  async addMatch(match: IMatch): Promise<void> {
    await this.httpClient.post(`${this.baseUrl}/matches`, match)
    return;
  }

  async updateMatch(match: Omit<IMatch, "id">, matchId: string): Promise<void> {
    await this.httpClient.put(`${this.baseUrl}/matches/${matchId}`, match)
    return;
  }

  async removeMatch(matchId: string): Promise<void> {
    await this.httpClient.delete(`${this.baseUrl}/matches${matchId}`)
    return;
  }
}

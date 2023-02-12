import { IMatch } from "@domain/model/match";
import { HttpClient } from "@infra/http/httpClient";
import MatchGateway from "@domain/gateway/matchGateway";
import { baseUrl } from "../../API/baseUrl"

export default class MatchHttpGateway implements MatchGateway {
  constructor(readonly httpClient: HttpClient) {}

  async createMatch(match: IMatch): Promise<void> {
    await this.httpClient.post(`${baseUrl}/matches`, match)
    return;
  }

  async getMatch(matchId: string): Promise<IMatch> {
    return await this.httpClient.get(`${baseUrl}/matches/${matchId}`)
  }

  async listMatches(): Promise<IMatch[]> {
    return await this.httpClient.get(`${baseUrl}/matches`)
  }

  async toggleStatusMatch(match: IMatch): Promise<void> {
    await this.httpClient.put(`${baseUrl}/matches/${match.id}`, match)
    return;
  }
}

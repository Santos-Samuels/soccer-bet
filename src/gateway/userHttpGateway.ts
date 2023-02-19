import UserGateway from "@domain/gateway/userGateway";
import { IUser } from "@domain/model/user";
import { HttpClient } from "@infra/http/httpClient";
import { baseUrl } from "../../API/baseUrl";

export default class UserHttpGateway implements UserGateway {
  constructor(readonly httpClient: HttpClient) {}

  async loginUser(userEmail: string): Promise<IUser> {
    const users = await this.httpClient.get<IUser[]>(`${baseUrl}/users?email=${userEmail}`)
    return users[0];
  }

  async createUser(user: IUser): Promise<void> {
    await this.httpClient.post(`${baseUrl}/users`, user);
    return;
  }

  async getUser(userId: string): Promise<IUser> {
    return await this.httpClient.get(`${baseUrl}/users/${userId}`);
  }

  async listUsers(): Promise<IUser[]> {
    return await this.httpClient.get(`${baseUrl}/users`);
  }
}
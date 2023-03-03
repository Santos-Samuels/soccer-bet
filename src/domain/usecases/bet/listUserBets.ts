import { IBet } from "@domain/model/bet";

export default interface IListUserBets {
  execute(userId: string, matchId?: string): Promise<IBet[]>
}
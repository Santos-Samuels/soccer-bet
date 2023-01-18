import { IBet } from "../model/bet";

export interface IBetRepository {
  listBets(): Promise<IBet[]>;
  createBet(bet: IBet): Promise<IBet>;
  deleteBet(betId: string): Promise<IBet>;
}
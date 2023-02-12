import { IBet } from "@domain/model/bet";


export default interface BetGateway {
  createBet(bet: IBet): Promise<void>;
  getBet(betId: string): Promise<IBet>;
  listBets(): Promise<IBet[]>;
}
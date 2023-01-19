import { IBet } from "../../domain/model/bet";
import { IBetRepository } from "../../domain/repository/betRepository";
import { FAKE_BETS } from "../mock/fakeBets";

export class BetRepositoryImplementation implements IBetRepository {
  async listBets(): Promise<IBet[]> {
    return FAKE_BETS.map((bet) => bet);
  }

  async createBet(bet: IBet): Promise<IBet> {
    FAKE_BETS.push(bet)
    return bet;
  }

  async deleteBet(betId: string): Promise<void> {
    FAKE_BETS.filter(bet => bet.id !== betId)
  }
}

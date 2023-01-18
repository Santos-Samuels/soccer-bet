import { IBet } from "../../model/bet";
import { IBetRepository } from "../../repository/betRepository";

export interface IDeleteBet {
  invoke(betId: string): Promise<IBet>;
}

export class DeleteBetUserCase implements IDeleteBet {
  private betRepository: IBetRepository;

  constructor(_betRepository: IBetRepository) {
    this.betRepository = _betRepository;
  }

  invoke(betId: string): Promise<IBet> {
    return this.betRepository.deleteBet(betId);
  }
}

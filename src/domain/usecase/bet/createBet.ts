import { IBet } from "../../model/bet";
import { IBetRepository } from "../../repository/betRepository";

export interface ICreateBet {
  invoke(bet: IBet): Promise<IBet>;
}

export class CreateBetUserCase implements ICreateBet {
  private betRepository: IBetRepository;

  constructor(_betRepository: IBetRepository) {
    this.betRepository = _betRepository;
  }

  invoke(bet: IBet): Promise<IBet> {
    return this.betRepository.createBet(bet);
  }
}

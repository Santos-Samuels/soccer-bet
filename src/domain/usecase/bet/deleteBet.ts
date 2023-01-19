import { IBetRepository } from "../../repository/betRepository";

export interface IDeleteBet {
  invoke(betId: string): Promise<void>;
}

export class DeleteBetUserCase implements IDeleteBet {
  private betRepository: IBetRepository;

  constructor(_betRepository: IBetRepository) {
    this.betRepository = _betRepository;
  }

  invoke(betId: string): Promise<void> {
    return this.betRepository.deleteBet(betId);
  }
}

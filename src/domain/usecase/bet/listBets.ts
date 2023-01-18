import { IBet } from "../../model/bet";
import { IBetRepository } from "../../repository/betRepository";

export interface IListBets {
  invoke(): Promise<IBet[]>;
}

export class ListBetsUseCase implements IListBets {
  private betRepository: IBetRepository;

  constructor(_betRepository: IBetRepository) {
    this.betRepository = _betRepository;
  }

  async invoke(): Promise<IBet[]> {
    return this.betRepository.listBets();
  }
}

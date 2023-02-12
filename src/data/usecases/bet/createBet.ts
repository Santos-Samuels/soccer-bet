import { v4 as uuidv4 } from "uuid";
import { IInputBet } from "@data/dto/input/bet";
import { IBet } from "@domain/model/bet";
import RequestStatus from "@domain/requestStatus/requestStatus";
import ICreateBet from "@domain/usecases/bet/createBet";
import BetHttpGateway from "@gateway/betHttpGateway";

export class CreateBetsUseCase implements ICreateBet {
  private betGateway: BetHttpGateway;

  constructor(_betGateway: BetHttpGateway) {
    this.betGateway = _betGateway;
  }

  async execute(input: IInputBet): Promise<IBet> {
    const requestStatus = new RequestStatus();
    const bet: IBet = { ...input, id: uuidv4(), value: 5.3 };

    try {
      const bets = await this.betGateway.listBets();

      if (
        bets.some(
          (item) =>
            item.matchId === bet.matchId &&
            item.hint.toString() === bet.hint.toString()
        )
      ) {
        throw requestStatus.badRequest;
      }

      await this.betGateway.createBet(bet);
      return bet;
    } catch (error) {
      throw requestStatus.serverError;
    }
  }
}

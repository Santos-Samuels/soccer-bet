import { CreateBetsUseCase } from "@data/usecases/bet/createBet";
import { ListBetsUseCase } from "@data/usecases/bet/listbets";
import { CreateMatchUseCase } from "@data/usecases/match/createMatch";
import { GetMatchUseCase } from "@data/usecases/match/getMatch";
import { ListMatchesUseCase } from "@data/usecases/match/listMatches";
import { ToggleStatusMatchUseCase } from "@data/usecases/match/toggleStatusMatch";
import { CreateUserUseCase } from "@data/usecases/user/createUser";
import { GetUserUseCase } from "@data/usecases/user/getUser";
import BetHttpGateway from "@gateway/betHttpGateway";
import MatchHttpGateway from "@gateway/matchHttpGateway";
import UserHttpGateway from "@gateway/userHttpGateway";
import AxiosAdapter from "@infra/http/axiosAdapter";

export default class AppFacade {
  private httpClient = new AxiosAdapter();
  private betGateway = new BetHttpGateway(this.httpClient);
  private matchGateway = new MatchHttpGateway(this.httpClient);
  private userGateway = new UserHttpGateway(this.httpClient);

  createBet = () => new CreateBetsUseCase(this.betGateway);
  listBets = () => new ListBetsUseCase(this.betGateway);
  createMatch = () => new CreateMatchUseCase(this.matchGateway);
  getMatch = () => new GetMatchUseCase(this.matchGateway);
  listMatches = () => new ListMatchesUseCase(this.matchGateway);
  toggleStatusMatch = () => new ToggleStatusMatchUseCase(this.matchGateway);
  createUser = () => new CreateUserUseCase(this.userGateway);
  getUser = () => new GetUserUseCase(this.userGateway);
}

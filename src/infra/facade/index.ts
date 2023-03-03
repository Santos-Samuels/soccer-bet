import {
  CreateBetUseCase,
  ListBetsUseCase,
  ListUserBetsUseCase,
  CreateMatchUseCase,
  GetMatchUseCase,
  ListMatchesUseCase,
  ToggleStatusMatchUseCase,
  CreateResultUseCase,
  ListResultsUseCase,
  GetResultUseCase,
  CreateUserUseCase,
  GetUserUseCase,
  LoginUserUseCase,
  ListUsersUseCase,
  UpdateUserUseCase,
  UpdateUsersScoreUseCase,
} from "@data/usecases";

import {
  BetHttpGateway,
  MatchHttpGateway,
  ResultHttpGateway,
  UserHttpGateway,
} from "@gateway/index";

import AxiosAdapter from "@infra/http/axiosAdapter";

export default class AppFacade {
  private httpClient = new AxiosAdapter();
  private betGateway = new BetHttpGateway(this.httpClient);
  private matchGateway = new MatchHttpGateway(this.httpClient);
  private userGateway = new UserHttpGateway(this.httpClient);
  private resultGateway = new ResultHttpGateway(this.httpClient);

  // bet usecases
  createBet = () => new CreateBetUseCase(this.betGateway);
  listBets = () => new ListBetsUseCase(this.betGateway);
  listUserBets = () => new ListUserBetsUseCase(this.betGateway);

  // match usecases
  createMatch = () => new CreateMatchUseCase(this.matchGateway);
  getMatch = () => new GetMatchUseCase(this.matchGateway);
  listMatches = () => new ListMatchesUseCase(this.matchGateway);
  toggleStatusMatch = () => new ToggleStatusMatchUseCase(this.matchGateway);
  
  // user usecases
  createUser = () => new CreateUserUseCase(this.userGateway);
  getUser = () => new GetUserUseCase(this.userGateway);
  updateUser = () => new UpdateUserUseCase(this.userGateway);
  loginUser = () => new LoginUserUseCase(this.userGateway);
  listUsers = () => new ListUsersUseCase(this.userGateway);
  updateUsersScore = () => new UpdateUsersScoreUseCase(this.userGateway, this.betGateway);
  
  // result usecases
  createResult = () => new CreateResultUseCase(this.resultGateway);
  listResults = () => new ListResultsUseCase(this.resultGateway);
  getResult = () => new GetResultUseCase(this.resultGateway);
}

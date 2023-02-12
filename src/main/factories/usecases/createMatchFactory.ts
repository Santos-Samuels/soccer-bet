import { CreateMatchUseCase } from "../../../data/usecases/match/createMatch";
import ICreateMatch from "../../../domain/usecases/createMatch";
import MatchHttpGateway from "../../../gateway/matchHttpGateway";
import AxiosAdapter from "../../../infra/http/axiosAdapter";

export const createMatchFactory = (): ICreateMatch => {
  const httpClient = new AxiosAdapter();
  const matchGateway = new MatchHttpGateway(httpClient);

  return new CreateMatchUseCase(matchGateway)
}

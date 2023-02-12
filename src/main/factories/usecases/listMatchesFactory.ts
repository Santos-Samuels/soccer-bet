import { ListMatchesUseCase } from "../../../data/usecases/match/listMatches";
import IListMatches from "../../../domain/usecases/listMatches";
import MatchHttpGateway from "../../../gateway/matchHttpGateway";
import AxiosAdapter from "../../../infra/http/axiosAdapter";

export const listMatchesFactory = (): IListMatches => {
  const httpClient = new AxiosAdapter();
  const matchGateway = new MatchHttpGateway(httpClient);

  return new ListMatchesUseCase(matchGateway)
}

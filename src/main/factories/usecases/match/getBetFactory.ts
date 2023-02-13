import { GetMatchUseCase } from "@data/usecases/match/getMatch";
import IGetMatch from "@domain/usecases/match/getMatch";
import MatchHttpGateway from "@gateway/matchHttpGateway";
import AxiosAdapter from "@infra/http/axiosAdapter";

export const getMatchFactory = (): IGetMatch => {
  const httpClient = new AxiosAdapter();
  const matchGateway = new MatchHttpGateway(httpClient);

  return new GetMatchUseCase(matchGateway)
}

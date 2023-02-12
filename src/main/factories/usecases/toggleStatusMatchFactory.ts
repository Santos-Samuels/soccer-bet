import { ToggleStatusMatchUseCase } from "@data/usecases/match/toggleStatusMatch";
import IToggleStatusMatch from "@domain/usecases/toggleStatusMatch";
import MatchHttpGateway from "@gateway/matchHttpGateway";
import AxiosAdapter from "@infra/http/axiosAdapter";

export const toggleStatusMatchFactory = (): IToggleStatusMatch => {
  const httpClient = new AxiosAdapter();
  const matchGateway = new MatchHttpGateway(httpClient);

  return new ToggleStatusMatchUseCase(matchGateway)
}

import { ListBetsUseCase } from "@data/usecases/bet/listbets";
import IListBets from "@domain/usecases/bet/listBets";
import BetHttpGateway from "@gateway/betHttpGateway";
import AxiosAdapter from "@infra/http/axiosAdapter";

export const listBetsFactory = (): IListBets => {
  const httpClient = new AxiosAdapter();
  const betGateway = new BetHttpGateway(httpClient);

  return new ListBetsUseCase(betGateway)
}

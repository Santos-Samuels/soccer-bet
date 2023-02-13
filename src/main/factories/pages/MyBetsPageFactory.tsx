import { MyBetsPage } from "@presentation/pages";
import { listBetsFactory } from "../usecases/bet/listBetsFactory";
import { getMatchFactory } from "../usecases/match/getBetFactory";

export const MyBetsPageFactory: React.FC = () => {
  return (
    <MyBetsPage
      listBets={listBetsFactory()}
      getMatch={getMatchFactory()}
    />
  );
};

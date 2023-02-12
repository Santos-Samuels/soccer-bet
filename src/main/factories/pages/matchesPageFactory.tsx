import { MatchesPage } from "@presentation/pages";
import { createMatchFactory } from "../usecases/match/createMatchFactory";
import { listMatchesFactory } from "../usecases/match/listMatchesFactory";
import { toggleStatusMatchFactory } from "../usecases/match/toggleStatusMatchFactory";

export const MatchesPageFactory: React.FC = () => {
  return (
    <MatchesPage
      listMatches={listMatchesFactory()}
      createMatch={createMatchFactory()}
      toggleStatusMatchFactory={toggleStatusMatchFactory()}
    />
  );
};

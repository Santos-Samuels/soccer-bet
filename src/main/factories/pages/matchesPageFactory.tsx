import { MatchesPage } from "@presentation/pages";
import { createMatchFactory } from "../usecases/createMatchFactory";
import { listMatchesFactory } from "../usecases/listMatchesFactory";
import { toggleStatusMatchFactory } from "../usecases/toggleStatusMatchFactory";

export const MatchesPageFactory: React.FC = () => {
  return (
    <MatchesPage
      listMatches={listMatchesFactory()}
      createMatch={createMatchFactory()}
      toggleStatusMatchFactory={toggleStatusMatchFactory()}
    />
  );
};

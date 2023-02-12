import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { IMatch } from "@domain/model/match";
import ICreateMatch from "@domain/usecases/createMatch";
import IListMatches from "@domain/usecases/listMatches";
import IToggleStatusMatch from "@domain/usecases/toggleStatusMatch";
import { MatchList, PageContainer } from "../components";
import GameForm from "../components/match/MatchForm";

type Props = {
  listMatches: IListMatches;
  createMatch: ICreateMatch;
  toggleStatusMatchFactory: IToggleStatusMatch;
};

const MatchesPage: React.FC<Props> = ({
  listMatches,
  createMatch,
  toggleStatusMatchFactory,
}) => {
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMatches = async () => {
    setIsLoading(true);
    try {
      const response = await listMatches.execute();
      setMatches(response);
    } catch (error) {
      setMatches([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-3xl border-b pb-1 border-gray-400 text-gray-400 font-bold mb-5">
          Partidas Configuradas
        </h1>

        <div className="mb-8">
          <GameForm addHandler={createMatch} getMatches={getMatches} />
        </div>

        {!isLoading && matches.length > 0 ? (
          <MatchList
            matches={matches}
            getMatches={getMatches}
            toggleStatusMatchFactory={toggleStatusMatchFactory}
          />
        ) : (
          <div className="mt-24 text-center">
            <BeatLoader color="#eab308" size={30} />
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default MatchesPage;

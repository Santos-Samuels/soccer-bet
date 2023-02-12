import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { IMatch } from "@domain/model/match";
import ICreateMatch from "@domain/usecases/match/createMatch";
import IListMatches from "@domain/usecases/match/listMatches";
import IToggleStatusMatch from "@domain/usecases/match/toggleStatusMatch";
import { MatchList, PageContainer, Select } from "../components";
import GameForm from "../components/match/MatchForm";

type Props = {
  listMatches: IListMatches;
  createMatch: ICreateMatch;
  toggleStatusMatchFactory: IToggleStatusMatch;
};

type ISortOptions = "todos" | "ativo" | "inativo";
const sortOptions = ["Todos", "Ativo", "Inativo"];

const MatchesPage: React.FC<Props> = ({
  listMatches,
  createMatch,
  toggleStatusMatchFactory,
}) => {
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<ISortOptions>("todos");
  const [filteredMatches, setFilteredMatches] = useState<IMatch[]>([]);

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

  const filterHandler = (filter: ISortOptions) => {
    if (filter === "ativo") {
      const filteredMatches = matches.filter((match) => match.isActive);
      setFilteredMatches(filteredMatches);
      return;
    }

    if (filter === "inativo") {
      const filteredMatches = matches.filter((match) => !match.isActive);
      setFilteredMatches(filteredMatches);
      return;
    }

    setFilteredMatches([]);
  };

  const toggleStatusHandler = async (matchId: string) => {
    await toggleStatusMatchFactory.execute(matchId);
    await getMatches();
  };

  useEffect(() => {
    filterHandler(filter);
  }, [filter]);

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <PageContainer>
      <div className="mb-8">
        <div className="mb-8">
          <GameForm addHandler={createMatch} getMatches={getMatches} />
        </div>

        <div className="border-b pb-1 border-gray-400 flex gap-5 justify-between items-end">
          <h1 className="text-xl md:text-3xl text-gray-400 font-bold">
            Partidas Configuradas
          </h1>

          <div className="w-48">
            <Select
              label="Filtrar por"
              options={sortOptions}
              defaultOption={sortOptions[0]}
              onChange={(e) =>
                setFilter(e.target.value.toLocaleLowerCase() as ISortOptions)
              }
            />
          </div>
        </div>

        {!isLoading && matches.length > 0 ? (
          <MatchList
            matches={filter !== "todos" ? filteredMatches : matches}
            toggleStatusHandler={toggleStatusHandler}
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

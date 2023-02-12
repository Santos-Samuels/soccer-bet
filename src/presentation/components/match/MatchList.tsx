import { useEffect, useState } from "react";
import { IMatch } from "@domain/model/match";
import IToggleStatusMatch from "@domain/usecases/toggleStatusMatch";
import Select from "../ui/select";
import MatchItem from "./MatchItem";

type ISortOptions = "todos" | "ativo" | "inativo";
const sortOptions = ["Todos", "Ativo", "Inativo"];

type Props = {
  matches: IMatch[];
  getMatches: () => Promise<void>;
  toggleStatusMatchFactory: IToggleStatusMatch;
};

const MetchList: React.FC<Props> = ({
  matches,
  getMatches,
  toggleStatusMatchFactory,
}) => {
  const [filteredMatches, setFilteredMatches] = useState<IMatch[]>([]);
  const [filter, setFilter] = useState<ISortOptions>("todos");

  const toggleStatusHandler = async (matchId: string) => {
    await toggleStatusMatchFactory.execute(matchId);
    await getMatches();
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

  useEffect(() => {
    filterHandler(filter);
  }, [filter]);

  if (matches.length === 0) {
    return (
      <h3 className="text-2xl mt-24 text-center">
        Nenhuma partida encontrada!
      </h3>
    );
  }

  return (
    <>
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

      <div className="flex gap-3 flex-wrap mt-5 justify-center">
        {filter !== "todos" ? (
          filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchItem
                match={match}
                key={match.id}
                toggleStatus={() => toggleStatusHandler(match.id)}
              />
            ))
          ) : (
            <h3 className="text-2xl mt-5 text-center">
              Nenhuma partida encontrada!
            </h3>
          )
        ) : (
          matches.map((match) => (
            <MatchItem
              match={match}
              key={match.id}
              toggleStatus={() => toggleStatusHandler(match.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default MetchList;

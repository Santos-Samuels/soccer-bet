import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IFormMatch, IMatch } from "../../../domain/model/match";
import MatchHttpGateway from "../../../gateway/matchHttpGateway";
import AxiosAdapter from "../../../infra/http/axiosAdapter";
import Select from "../ui/select";
import GameForm from "./MatchForm";
import MatchItem from "./MatchItem";

type ISortOptions = "todos" | "ativo" | "inativo";
const sortOptions = ["Todos", "Ativo", "Inativo"];

const MetchList: React.FC = () => {
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [filteredMatches, setFilteredMatches] = useState<IMatch[]>([]);
  const [filter, setFilter] = useState<ISortOptions>("todos");

  const httpClient = new AxiosAdapter();
  const matchGateway = new MatchHttpGateway(
    httpClient,
    "http://localhost:3000"
  );

  const add = async (match: IFormMatch) => {
    try {
      if (
        matches.some((el) => el.team1 === match.team1 && el.team2 === el.team2)
      ) {
        throw new Error();
      }

      const newMatch: IMatch = {
        id: uuidv4(),
        ...match,
        isActive: true,
      };

      console.log(newMatch);

      await matchGateway.addMatch(newMatch);
      console.log("Match successfully added");
    } catch (error) {
      console.log("Match already exists");
    }
  };

  const list = async () => {
    const response = await matchGateway.listMatches();
    setMatches(response);
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
    list();
  }, []);

  useEffect(() => {
    filterHandler(filter);
  }, [filter]);

  console.log(filter);
  console.log(filteredMatches);

  return (
    <>
      <div className="mb-8">
        <GameForm addGameHandler={add} />
      </div>

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
        {filteredMatches.length !== 0
          ? filteredMatches.map((match) => (
              <MatchItem match={match} key={match.id} />
            ))
          : matches.map((match) => <MatchItem match={match} key={match.id} />)}
      </div>
    </>
  );
};

export default MetchList;

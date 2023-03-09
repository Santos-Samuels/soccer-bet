import { AppContext } from "@presentation/context";
import { useContext } from "react";
import ResultItem from "./ResultItem";

const ResultList: React.FC = () => {
  const { results, matches } = useContext(AppContext);

  const getResultMatch = (matchId: string) => {
    return matches.find((match) => match.id === matchId)!;
  };

  if (results.length === 0) {
    return (
      <h3 className="text-2xl mt-24 text-center">
        Nenhum resultado de partida encontrado!
      </h3>
    );
  }

  return (
    <>
      <p>
        Total de itens:{" "}
        {results.length}
      </p>
      <div className="flex gap-3 flex-wrap mt-5 justify-center">
        {results.map((result) => {
          return <ResultItem result={result} match={getResultMatch(result.matchId)} key={result.id} />;
        })}
      </div>
    </>
  );
};

export default ResultList;

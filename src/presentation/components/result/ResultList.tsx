import { AppContext } from "@presentation/context";
import { useContext } from "react";
import ResultItem from "./ResultItem";

const ResultList: React.FC = () => {
  const { results, matches } = useContext(AppContext);

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
        {results.map((result, index) => {
          return <ResultItem result={result} match={matches[index]} key={result.id} />;
        })}
      </div>
    </>
  );
};

export default ResultList;

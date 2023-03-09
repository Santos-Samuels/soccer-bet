import { AppContext } from "@presentation/context";
import { useContext } from "react";
import MatchItem from "./MatchItem";

const MatchList: React.FC = () => {
  const { matches, currentUser } = useContext(AppContext);

  if (matches.length === 0) {
    return (
      <h3 className="text-2xl mt-24 text-center">
        Nenhuma partida encontrada!
      </h3>
    );
  }

  return (
    <>
      <p>
        Total de itens:{" "}
        {!currentUser?.isAdmin
          ? matches.filter((item) => item.isActive).length
          : matches.length}
      </p>
      <div className="flex gap-3 flex-wrap mt-5 justify-center">
        {matches.map((match) => {
          if (!match.isActive && !currentUser?.isAdmin) return;

          return <MatchItem match={match} key={match.id} />;
        })}
      </div>
    </>
  );
};

export default MatchList;

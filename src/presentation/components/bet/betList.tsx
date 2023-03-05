import { AppContext } from "@presentation/context";
import { useContext } from "react";
import BetItem from "./BetItem";

const BetList: React.FC = () => {
  const { bets, matches } = useContext(AppContext)
  if (bets.length === 0) {
    return (
      <h3 className="text-2xl mt-24 text-center">Nenhuma aposta encontrada!</h3>
    );
  }

  return (
    <>
      <p>Total de itens: {bets.length}</p>
      <div className="flex gap-3 flex-wrap justify-center mt-5">
        {bets.map((bet, index) => (
          <BetItem bet={bet} key={bet.id} match={matches[index]} />
        ))}
      </div>
    </>
  );
};

export default BetList;

import { IBet } from "@domain/model/bet";
import { IMatch } from "@domain/model/match";
import BetItem from "./betItem";

type Props = {
  bets: IBet[];
  matches: IMatch[];
}

const BetList: React.FC<Props> = ({ bets, matches }) => {
  if (bets.length === 0) {
    return (
      <h3 className="text-2xl mt-24 text-center">
        Nenhuma aposta encontrada!
      </h3>
    );
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {bets.map((bet, index) => (
        <BetItem bet={bet} key={bet.id} match={matches[index]} />
      ))}
    </div>
  );
};

export default BetList;

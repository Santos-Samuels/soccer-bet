import { FAKE_BETS } from "@data/mock/fakeBets";
import BetItem from "./betItem";

const BetList: React.FC = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {FAKE_BETS.map((bet) => (
        <BetItem bet={bet} key={bet.id} />
      ))}
    </div>
  );
};

export default BetList;

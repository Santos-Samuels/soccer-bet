import { IMatch } from "@domain/model/match";
import MatchItem from "./MatchItem";

type Props = {
  matches: IMatch[];
  toggleStatusHandler: (matchId: string) => Promise<void>;
};

const MetchList: React.FC<Props> = ({ matches, toggleStatusHandler }) => {
  if (matches.length === 0) {
    return (
      <h3 className="text-2xl mt-24 text-center">
        Nenhuma partida encontrada!
      </h3>
    );
  }

  return (
    <>
      <div className="flex gap-3 flex-wrap mt-5 justify-center">
        {matches.map((match) => (
          <MatchItem
            match={match}
            key={match.id}
            toggleStatus={() => toggleStatusHandler(match.id)}
          />
        ))}
      </div>
    </>
  );
};

export default MetchList;

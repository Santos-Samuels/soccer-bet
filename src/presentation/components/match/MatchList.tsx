import { useState } from "react";
import { MATCHES } from "../../../data/mock/fakeMatches";
import { IMatch } from "../../../domain/model/match";
import MatchItem from "./MatchItem";

const MetchList: React.FC = () => {
  const [matches, setMatches] = useState<IMatch[]>(MATCHES);

  // const addGame = (game: IMetch) => {
  //   setGames((prev) => {
  //     return [game, ...prev];
  //   });
  // };

  return (
    <>
      {/* <GameForm addGameHandler={addGame} /> */}

      <div className="flex gap-3 flex-wrap">
        {matches.map((match) => (
          <MatchItem match={match} key={match.id} />
        ))}
      </div>
    </>
  );
};

export default MetchList;

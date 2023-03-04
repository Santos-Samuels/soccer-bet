import { format } from "date-fns";
import { IMatch } from "@domain/model/match";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import { AppContext } from "@presentation/context";
import AppFacade from "@infra/facade";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  match: IMatch;
};

const { toggleStatusMatch, createBet } = new AppFacade();

const MatchItem: React.FC<Props> = ({ match }) => {
  const date = new Date(match.date);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getMatches, currentUser, setCurrentMatch } = useContext(AppContext);
  const navigate = useNavigate()

  const toggleStatusHandler = async () => {
    setIsLoading(true);
    await toggleStatusMatch().execute(match.id);
    await getMatches(false);
    setIsLoading(false);
  };

  const makeBet = () => {
    setCurrentMatch(match);
    navigate('/my-bets')
  }

  return (
    <article className="bg-neutral-700 rounded-lg py-2 px-3 w-60">
      <section className="h-full grid grid-flow-row">
        <div className="flex justify-between mb-2">
          <p>{match.group}</p>

          <p className="text-sm">
            {format(date, "d")} {format(date, "LLL")} • {format(date, "HH:mm")}
          </p>
        </div>

        <div className="flex justify-center items-center bg-neutral-600 p-2 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <div className="w-6">
              <img
                src={`/public/assets/${match.team1}.png`}
                alt={match.team1}
              />
            </div>
            <p className="ml-1 text-center">{match.team1}</p>
          </div>

          <p className="mx-2">vs</p>

          <div className="flex flex-col justify-center items-center">
            <div className="w-6">
              <img
                src={`/public/assets/${match.team2}.png`}
                alt={match.team2}
              />
            </div>
            <p className="ml-1 text-center">{match.team2}</p>
          </div>
        </div>

        <div className={`mt-2 flex ${currentUser?.isAdmin ? "justify-between" : "justify-end"} items-center`}>
          {currentUser?.isAdmin && <p
            className={`${
              match.isActive ? "bg-green-700" : "bg-yellow-800"
            } px-1 rounded-md`}
          >
            {match.isActive ? "Ativo" : "Inativo"}
          </p>}

          <div className="flex items-center gap-3">
            {currentUser?.isAdmin && <Button
              type="button"
              model="sm"
              isLoading={isLoading}
              onClick={toggleStatusHandler}
            >
              {match.isActive ? <FaEye /> : <FaEyeSlash />}
            </Button>}

            {match.isActive && <Button
              type="button"
              text="Apostar"
              className="justify-self-end"
              model="sm"
              onClick={makeBet}
            />}
          </div>
        </div>
      </section>
    </article>
  );
};

export default MatchItem;

import { format } from "date-fns";
import { IMatch } from "@domain/model/match";
import Button from "../ui/button";
import { useState } from "react";

type Props = {
  match: IMatch;
  toggleStatus: () => Promise<void>;
};

const MatchItem: React.FC<Props> = ({ match, toggleStatus }) => {
  const date = new Date(match.date);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleStatusHandler = async () => {
    setIsLoading(true);
    await toggleStatus();
    setIsLoading(false);
  };

  return (
    <article className="bg-neutral-700 rounded-lg py-2 px-3 w-60">
      <section>
        <div className="flex justify-between mb-2">
          <p>{match.group}</p>

          <p className="text-sm">
            {format(date, "d")} {format(date, "LLL")} • {format(date, "HH:mm")}
          </p>
        </div>

        <div className="flex justify-center items-center  bg-neutral-600 p-2 rounded-md">
          <div className="flex flex-col justify-center items-center">
            <div className="w-6">
              <img src={`/public/assets/${match.team1}.png`} alt={match.team1} />
            </div>
            <p className="ml-1 text-center">{match.team1}</p>
          </div>

          <p className="mx-2">vs</p>

          <div className="flex flex-col justify-center items-center">
            <div className="w-6">
              <img src={`/public/assets/${match.team2}.png`} alt={match.team2} />
            </div>
            <p className="ml-1 text-center">{match.team2}</p>
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center self-end">
          <p
            className={`${
              match.isActive ? "bg-green-700" : "bg-yellow-800"
            } px-1 rounded-md`}
          >
            {match.isActive ? "Ativo" : "Inativo"}
          </p>

          <Button
            type="submit"
            text={match.isActive ? "Encerrar" : "Ativar"}
            className="self-center"
            model="sm"
            isLoading={isLoading}
            onClick={toggleStatusHandler}
          />
        </div>
      </section>
    </article>
  );
};

export default MatchItem;

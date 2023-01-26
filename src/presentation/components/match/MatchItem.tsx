import { format } from "date-fns";
import { IMatch } from "../../../domain/model/match";
import Button from "../ui/button";
import { FaTrash } from "react-icons/fa";

const MatchItem: React.FC<{ match: IMatch }> = ({ match }) => {
  const date = new Date(match.date);

  return (
    <article
      className={`bg-neutral-700 rounded-lg py-2 px-3 ${
        match.status === "expired" ? "opacity-50" : "opacity-100"
      }`}
    >
      <section>
        <div className="flex justify-between mb-2">
          <p>{match.group}</p>

          <p className="text-sm">
            {format(date, "d")} {format(date, "LLL")} • {format(date, "HH:mm")}
          </p>
        </div>

        <div className="flex bg-neutral-600 p-2 rounded-md">
          <div className="flex items-center">
            <div className="w-6">
              <img src={`/src/assets/${match.team1}.png`} alt={match.team1} />
            </div>
            <p className="ml-1">{match.team1}</p>
          </div>

          <p className="mx-2">vs</p>

          <div className="flex items-center">
            <div className="w-6">
              <img src={`/src/assets/${match.team2}.png`} alt={match.team2} />
            </div>
            <p className="ml-1">{match.team2}</p>
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <p className="bg-rose-900 px-1 rounded-md">
            {match.status === "active" ? "Ativo" : "Expirado"}
          </p>

          <div className="flex items-center gap-4">
            <span className="cursor-pointer">
              <FaTrash />
            </span>
            
            <Button
              type="submit"
              text={match.status === "active" ? "Encerrar" : "Ativar"}
              className="self-center"
              model="sm"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default MatchItem;

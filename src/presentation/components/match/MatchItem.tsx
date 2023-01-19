import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IMatch } from "../../../domain/model/match";

const MatchItem: React.FC<{ match: IMatch }> = ({ match }) => {
  const date = new Date(match.date);

  return (
    <article className="flex bg-neutral-700 rounded-lg py-2 px-3 gap-x-3 items-center">
      <div className=" flex flex-col justify-center border-r border-gray-600 pr-3 text-center min-h-full">
        <p className="text-sm">{format(date, "EEEE", { locale: ptBR })}</p>
        <p>{format(date, "HH:mm")}</p>
      </div>

      <section>
        <div className="flex">
          <div className="flex items-center">
            {/* <img src={`${match.team1}.png`} alt={match.team1} width={15} /> */}
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

        <div className="flex justify-between mt-3">
          <p>{match.group}</p>

          <p className="bg-neutral-600 px-1 rounded-md">
            <p>{format(date, "dd/MM/yyyy")}</p>
          </p>
        </div>
      </section>
    </article>
  );
};

export default MatchItem;

import { format } from "date-fns";
import { IBet } from "@domain/model/bet";
import { FiClock } from "react-icons/fi";
import { IMatch } from "@domain/model/match";
import { ptBR } from "date-fns/locale";

const BetItem: React.FC<{ bet: IBet, match: IMatch }> = ({ bet, match }) => {
  const date = new Date(match.date);

  const formatToDate = (time: Date, pattern: string) => {
    return format(time, pattern, {
      locale: ptBR,
    });
  };

  return (
    <article>
      <section className="flex flex-col bg-neutral-700 rounded-lg py-2 px-3 items-center">
        <div className="flex justify-between border-b border-neutral-600 pb-1 w-full">
          <p className="text-sm">{match.group}</p>
          <p className="text-sm">
            {formatToDate(date, "d")} {formatToDate(date, "LLL")} • {formatToDate(date, "HH:mm")}
          </p>
        </div>

        <div className="flex items-end my-4">
          <div className="flex flex-col items-center">
            <div className="w-12">
              <img src={`/public/assets/${match.team1}.png`} alt={match.team1} />
            </div>
            <p className="mt-1">{match.team1}</p>
          </div>

          <div className="flex items-center mx-4 self-center bg-neutral-600 px-2 rounded-md">
            <strong className="font-bold text-2xl">{bet.hint[0].toString()}</strong>
            <p className="mx-4">vs</p>
            <strong className="font-bold text-2xl">{bet.hint[1].toString()}</strong>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12">
              <img src={`/public/assets/${match.team2}.png`} alt={match.team2} />
            </div>
            <p className="mt-1">{match.team2}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between -mt-2 bg-neutral-600 rounded-md py-1 px-2">
          <p className="bg-neutral-600 px-1 rounded-md">
            {bet.value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <div className="flex items-center">
            <FiClock className="mr-1" />
            <p className="text-sm">Sem placar</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BetItem;

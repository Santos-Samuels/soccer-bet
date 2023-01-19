import { format } from "date-fns";
import { MATCHES } from "../../../data/mock/fakeMatches";
import { IBet } from "../../../domain/model/bet";
import { FiClock } from "react-icons/fi";

const BetItem: React.FC<{ bet: IBet }> = ({ bet }) => {
  const match = MATCHES.find((item) => item.id === bet.matchId)!;
  const date = new Date(match.date);

  return (
    <article>
      <section className="flex flex-col bg-neutral-700 rounded-lg py-2 px-3 items-center">
        <div className="flex justify-between border-b border-neutral-600 pb-1 w-full">
          <p className="text-sm">{match.group}</p>
          <p className="text-sm">
            {format(date, "d")} {format(date, "LLL")} • {format(date, "HH:mm")}
          </p>
        </div>

        <div className="flex items-end my-4">
          <div className="flex flex-col items-center">
            <div className="w-12">
              <img src={`/src/assets/${match.team1}.png`} alt={match.team1} />
            </div>
            <p className="mt-1">{match.team1}</p>
          </div>

          <div className="flex items-center mx-4 self-center bg-neutral-600 px-2 rounded-md">
            <p className="font-bold text-2xl">{bet.hint[0]}</p>
            <p className="mx-4">vs</p>
            <p className="font-bold text-2xl">{bet.hint[1]}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12">
              <img src={`/src/assets/${match.team2}.png`} alt={match.team2} />
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
            <p className="text-sm">Aguardando</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BetItem;

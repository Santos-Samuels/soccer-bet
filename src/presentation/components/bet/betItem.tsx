import { format } from "date-fns";
import { IBet } from "@domain/model/bet";
import { FiClock } from "react-icons/fi";
import { IMatch } from "@domain/model/match";
import { ptBR } from "date-fns/locale";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@presentation/context";
import { MdCheck, MdClose } from "react-icons/md";

const BetItem: React.FC<{ bet: IBet; match: IMatch }> = ({ bet, match }) => {
  const { results } = useContext(AppContext);
  const [isResultCorrect, setIsResultCorrect] = useState<boolean>(false);

  const date = new Date(match.date);
  const result = results.find((result) => result.matchId === bet.matchId);

  const formatToDate = (time: Date, pattern: string) => {
    return format(time, pattern, {
      locale: ptBR,
    });
  };

  const verifyResult = () => {
    if (bet.hint.toString() === result?.hint.toString()) {
      setIsResultCorrect(true);
      return;
    }

    setIsResultCorrect(false);
  };

  useEffect(() => {
    verifyResult();
  }, [result]);

  return (
    <article>
      <section className="flex flex-col bg-neutral-700 rounded-lg py-2 px-3 items-center">
        <div className="flex justify-between border-b border-neutral-600 pb-1 w-full">
          <p className="text-sm">{match.group}</p>
          <p className="text-sm">
            {formatToDate(date, "d")} {formatToDate(date, "LLL")} •{" "}
            {formatToDate(date, "HH:mm")}
          </p>
        </div>

        <div className="flex items-end my-4">
          <div className="flex flex-col items-center">
            <div className="w-12">
              <img
                src={`/public/assets/${match.team1}.png`}
                alt={match.team1}
              />
            </div>
            <p className="mt-1">{match.team1}</p>
          </div>

          <div className="flex items-center mx-4 self-center bg-neutral-600 px-2 rounded-md">
            <strong className="font-bold text-2xl">
              {bet.hint[0].toString()}
            </strong>
            <p className="mx-4">vs</p>
            <strong className="font-bold text-2xl">
              {bet.hint[1].toString()}
            </strong>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12">
              <img
                src={`/public/assets/${match.team2}.png`}
                alt={match.team2}
              />
            </div>
            <p className="mt-1">{match.team2}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between -mt-2 bg-neutral-600 rounded-md py-1 px-2">
          <p>
            {bet.value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          {result ? (
            <div
              className={`flex items-center gap-1 font-medium px-1 rounded-md text-white ${
                isResultCorrect ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {isResultCorrect ? <MdCheck /> : <MdClose />}
              <p className="text-sm">{isResultCorrect ? "Acertou" : "Errou"}</p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              {<FiClock />}
              <p className="text-sm">Sem placar</p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
};

export default BetItem;

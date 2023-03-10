import { format } from "date-fns";
import { IResult } from "@domain/model/result";
import { IMatch } from "@domain/model/match";

type Props = {
  result: IResult;
  match: IMatch;
};

const ResultItem: React.FC<Props> = ({ result, match }) => {
  const date = match ? new Date(match.date) : null;

  return (
    <article className="bg-neutral-700 rounded-lg py-2 px-3 w-60">
      <section>
        <span className="text-xs">PARTIDA</span>
        <div className="text-center gap-1 bg-neutral-600 p-2 rounded-lg">
          <p>
            {match?.team1} x {match?.team2}
          </p>

          {date && <p className="text-sm">
            {format(date, "d")} {format(date, "LLL")} • {format(date, "HH:mm")}
          </p>}
        </div>
      </section>

      <section className="mt-3">
        <span className="text-xs">PLACAR</span>
        <div className="flex justify-center items-center bg-neutral-600 rounded-md">
          <strong className="font-bold text-2xl">
            {result.hint[0].toString()}
          </strong>
          <p className="mx-4">vs</p>
          <strong className="font-bold text-2xl">
            {result.hint[1].toString()}
          </strong>
        </div>
      </section>
    </article>
  );
};

export default ResultItem;

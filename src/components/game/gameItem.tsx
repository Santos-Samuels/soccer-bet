import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const GameItem: React.FC<{ game: IGame }> = ({ game }) => {
  const date = new Date(game.date);

  return (
    <article className="flex bg-neutral-700 rounded-md py-2 px-3 gap-x-3 items-center">
      <div className=" flex flex-col justify-center border-r border-gray-600 pr-3 text-center min-h-full">
        <p className="text-sm">{format(date, "EEEE", { locale: ptBR })}</p>
        <p>{format(date, "HH:mm")}</p>
      </div>

      <section>
        <div className="flex">
          <div className="flex">
            <img src={game.teams[0].image} alt={game.teams[0].name} width={15} />
            <p className="ml-1">{game.teams[0].name}</p>
          </div>

          <p className="mx-2">vs</p>

          <div className="flex">
            <img src={game.teams[1].image} alt={game.teams[1].name} width={15} />
            <p className="ml-1">{game.teams[1].name}</p>
          </div>
        </div>

        <div className="flex justify-end mt-3">
          <p className="bg-neutral-600 px-1 rounded-md">
            <p>{format(date, "dd/MM/yyyy")}</p>
          </p>
        </div>
      </section>
    </article>
  );
};

export default GameItem;

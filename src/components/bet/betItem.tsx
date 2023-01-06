import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const BetItem: React.FC<{ bet: IBet }> = ({ bet }) => {
  const date = new Date(bet.date);

  return (
    <article className="flex bg-neutral-700 rounded-md py-2 px-3 gap-x-3 items-center">
      <div className=" flex flex-col justify-center border-r border-gray-600 pr-3 text-center min-h-full">
        <p>{format(date, "EEEE", { locale: ptBR })}</p>
        <p>{format(date, "HH:mm")}</p>
        {/* <p>{format(date, "dd/MM/yyyy")}</p> */}
      </div>

      <section>
        <div className="flex">
          <div className="flex">
            <img src={bet.teams[0].image} alt={bet.teams[0].name} width={15} />
            <p className="ml-1">{bet.teams[0].name}</p>
          </div>

          <p className="mx-2">vs</p>

          <div className="flex">
            <img src={bet.teams[1].image} alt={bet.teams[1].name} width={15} />
            <p className="ml-1">{bet.teams[1].name}</p>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <p className="bg-neutral-600 px-1 rounded-md">
            {bet.score[0]} x {bet.score[0]}
          </p>

          <p>{bet.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
      </section>
    </article>
  );
};

export default BetItem;

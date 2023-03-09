import { Button, Input, Select } from "..";
import { useForm } from "react-hook-form";
import { IInputMatch } from "@data/dto/input/match";
import { useContext, useEffect, useState } from "react";
import AppFacade from "@infra/facade";
import { AppContext } from "@presentation/context";
import { IInputBet, IInputBetForm } from "@data/dto/input/bet";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { validate } from "uuid";
import ErrorMessage from "../ui/ErrorMessage";

const teams = [
  "Catar",
  "Equador",
  "Holanda",
  "Senegal",
  "Estados Unidos",
  "Inglaterra",
  "Irã",
  "País de Gales",
  "Argentina",
  "Arábia Saudita",
  "México",
  "Polônia",
  "França",
  "Dinamarca",
  "Tunísia",
  "Austrália",
  "Espanha",
  "Alemanha",
  "Japão",
  "Costa Rica",
  "Bélgica",
  "Canadá",
  "Marrocos",
  "Croácia",
  "Brasil",
  "Sérvia",
  "Suíça",
  "Camarões",
  "Portugal",
  "Gana",
  "Uruguai",
  "Coreia do Sul",
];
const { createBet, listBets } = new AppFacade();

const BetForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputBetForm>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { currentMatch, currentUser, setCurrentMatch, getBets } =
    useContext(AppContext);

  const onSubmit = async (data: IInputBetForm) => {
    setIsLoading(true);
    const newBet: IInputBet = {
      matchId: currentMatch!.id,
      hint: [data.hint1, data.hint2],
      userId: currentUser!.id,
    };

    await createBet().execute(newBet);
    setCurrentMatch(undefined);
    reset();
    setIsLoading(false);
    await getBets(currentUser?.id);
  };

  const formatToInputDate = () => {
    return (
      currentMatch &&
      format(new Date(currentMatch.date), "P", { locale: ptBR })
        .split("/")
        .reverse()
        .join("-")
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-700 rounded-xl p-5 my-3"
    >
      <h1 className="font-semibold text-xl border-b border-neutral-600 pb-1">
        Fazer Aposta
      </h1>

      <div className="mt-5 flex flex-col sm:grid grid-cols-2 md:grid-cols-6 gap-5">
        <Input
          id="date"
          type="date"
          label="Data"
          value={formatToInputDate()}
          disabled={true}
        />

        <Input
          id="time"
          type="time"
          label="Hora"
          value={
            currentMatch &&
            format(new Date(currentMatch.date), "p", { locale: ptBR })
          }
          disabled={true}
        />

        <Select
          id="team1"
          label="Time 1"
          options={teams}
          value={currentMatch?.team1}
          disabled={true}
        />

        <Select
          id="team2"
          label="Time 2"
          options={teams}
          value={currentMatch?.team2}
          disabled={true}
        />

        <div className="flex flex-col">
          <p>Placar</p>

          <div className="grid grid-cols-3 items-center">
            <Input
              id="hint1"
              formRegister={register("hint1", { required: true })}
              type="number"
              min="0"
              max="10"
            />

            <span className="text-center font-bold text-2xl">x</span>

            <Input
              id="hint2"
              formRegister={register("hint2", { required: true })}
              type="number"
              min="0"
              max="10"
            />
          </div>
          {(errors.hint1 || errors.hint2) && (
            <ErrorMessage message="Informe o placar" />
          )}
        </div>

        <div className="sm:mt-5">
          <Button type="submit" text="Apostar" isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
};

export default BetForm;

import { Button, Input, Select } from "..";
import { useForm } from "react-hook-form";
import { IInputMatch } from "@data/dto/input/match";
import ICreateMatch from "@domain/usecases/match/createMatch";
import { useState } from "react";
import AppFacade from "@infra/facade";

interface IProps {
  getMatches: () => Promise<void>;
}

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

const groups = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E ",
  "Group F",
  "Group G",
  "Group H",
];

const appFacade = new AppFacade();

const GameForm: React.FC<IProps> = ({ getMatches }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<IInputMatch>({
    defaultValues: { team1: "", team2: "", group: "" },
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: IInputMatch) => {
    setIsLoading(true);
    await appFacade.createMatch().execute(data);
    reset();
    setIsLoading(false);
    await getMatches();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-700 rounded-xl p-5 my-3"
    >
      <h1 className="font-semibold text-xl border-b border-neutral-600 pb-1">
        Adicionar Partida
      </h1>

      <div className="mt-5 flex flex-col sm:grid grid-cols-2 md:grid-cols-6 gap-5">
        <Input
          formRegister={register("date", { required: "Campo obrigatório" })}
          type="date"
          label="Data"
          errorMessage={errors.date?.message}
        />

        <Input
          formRegister={register("time", { required: "Campo obrigatório" })}
          type="time"
          label="Hora"
          errorMessage={errors.time?.message}
        />

        <Select
          formRegister={register("group", {
            required: "Campo obrigatório",
          })}
          label="Grupo"
          options={groups}
          errorMessage={errors.group?.message}
        />

        <Select
          formRegister={register("team1", {
            required: "Campo obrigatório",
          })}
          label="Time 1"
          options={teams}
          toDisableOption={watch("team2")}
          errorMessage={errors.team1?.message}
        />

        <Select
          formRegister={register("team2", {
            required: "Campo obrigatório",
          })}
          label="Time 2"
          options={teams}
          toDisableOption={watch("team1")}
          errorMessage={errors.team2?.message}
        />

        <div className="sm:mt-5">
          <Button type="submit" text="Adicionar" isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
};

export default GameForm;

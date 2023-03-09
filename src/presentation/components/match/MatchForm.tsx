import { Button, Input, Select } from "..";
import { useForm } from "react-hook-form";
import { IInputMatch } from "@data/dto/input/match";
import { useContext, useState } from "react";
import AppFacade from "@infra/facade";
import { AppContext } from "@presentation/context";

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

const { createMatch } = new AppFacade();

const MatchForm: React.FC = () => {
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
  const { getMatches } = useContext(AppContext);

  const onSubmit = async (data: IInputMatch) => {
    setIsLoading(true);
    await createMatch().execute(data);
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
          id="date"
          formRegister={register("date", { required: "Informe a data" })}
          type="date"
          label="Data"
          errorMessage={errors.date?.message}
        />

        <Input
          id="time"
          formRegister={register("time", { required: "Informe a hora" })}
          type="time"
          label="Hora"
          errorMessage={errors.time?.message}
        />

        <Select
          id="group"
          formRegister={register("group", {
            required: "Informe o grupo",
          })}
          label="Grupo"
          options={groups}
          errorMessage={errors.group?.message}
        />

        <Select
          id="team1"
          formRegister={register("team1", {
            required: "Informe o time 1",
          })}
          label="Time 1"
          options={teams}
          toDisableOption={watch("team2")}
          errorMessage={errors.team1?.message}
        />

        <Select
          id="team2"
          formRegister={register("team2", {
            required: "Informe o time 2",
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

export default MatchForm;

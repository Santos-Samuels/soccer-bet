import { Button, Input, Select } from "..";
import { useForm } from "react-hook-form";

const FAKE_GAMES: IGame[] = [
  {
    id: "asdasd5sd3s21d3as",
    date: "2023-01-06T12:54:28.642Z",
    teams: [
      {
        id: "asdsnmds4f89s6f15s3",
        name: "Flamengo",
        image:
          "https://lh3.ggpht.com/-ogg-lDOexbw/Y1cU3X8DxSI/AAAAAAAAGYM/gd7Xy4GCwa8tLLo0f7xByRjdH-tatDLPACNcBGAsYHQ/s800/flamengo.png",
      },
      {
        id: "asdsnmds345346234",
        name: "Vasco",
        image:
          "https://static.dicionariodesimbolos.com.br/upload/60/81/conheca-o-significado-do-escudo-do-vasco-da-gama-5_xl.png",
      },
    ],
  },
];

const SELECT_OPTIONS: ISelectOption[] = [
  {
    value: "FLAMENGO",
    name: "FLAMENGO",
  },
  {
    value: "VASCO",
    name: "VASCO",
  },
  {
    value: "BAHIA",
    name: "BAHIA",
  },
  {
    value: "SAO-PAULO",
    name: "SÃO PAULO",
  },
  {
    value: "FLUMINENSE",
    name: "FLUMINENSE",
  },
];

interface IProps {
  addGameHandler: (game: IGame) => void;
}

interface IGameForm {
  date: string;
  firstTeam: string;
  secondTeam: string;
}

const GameForm: React.FC<IProps> = ({ addGameHandler }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGameForm>();

  const onSubmit = (data: IGameForm) => {
    addGameHandler({
      id: "sdsfdssd1fsd6f",
      date: data.date,
      teams: [
        {
          id: "sdsfdsff51fsd6f",
          image:
            "https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png",
          name: data.firstTeam,
        },
        {
          id: "sdsfdsff51fsd6f",
          image:
            "https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png",
          name: data.secondTeam,
        },
      ],
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-700 rounded-xl p-5 my-3"
    >
      <h1 className="font-semibold text-xl border-b border-neutral-600 pb-1">
        Adicionar Jogo
      </h1>

      <div className="mt-5 flex flex-wrap items-start gap-3">
        <Input
          formRegister={register("date", { required: "Campo obrigatório" })}
          type="date"
          label="Data do Evento"
          errorMessage={errors.date?.message}
        />

        <div className="flex gap-3 items-end">
          <Select
            formRegister={register("firstTeam", {
              required: "Campo obrigatório",
            })}
            label="Seleções Participantes"
            options={SELECT_OPTIONS}
          />
          <Select
            formRegister={register("secondTeam", {
              required: "Campo obrigatório",
            })}
            options={SELECT_OPTIONS}
          />
        </div>

        <Button type="submit" text="Adicionar" className="self-center" />
      </div>
    </form>
  );
};

export default GameForm;

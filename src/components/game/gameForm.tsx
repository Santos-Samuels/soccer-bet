import { Input, Select } from "..";

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

const GameForm: React.FC = () => {
  return (
    <form className="bg-neutral-700 rounded-xl p-5 my-3">
      <h1 className="font-semibold text-xl border-b border-neutral-600 pb-1">
        Adicionar Aposta
      </h1>

      <div className="mt-5 flex flex-wrap items-start gap-3">
        <Input type="date" label="Data do Evento" />

        <div className="flex gap-3 items-end">
          <Select label="Seleções Participantes" options={SELECT_OPTIONS} />
          <Select options={SELECT_OPTIONS} />
        </div>
      </div>
    </form>
  );
};

export default GameForm;

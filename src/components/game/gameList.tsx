import GameItem from "./gameItem";

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
    ]
  },
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
    ]
  },
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
    ]
  },
];

const GameList: React.FC = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {FAKE_GAMES.map((game) => (
        <GameItem game={game} />
      ))}
    </div>
  );
};

export default GameList;

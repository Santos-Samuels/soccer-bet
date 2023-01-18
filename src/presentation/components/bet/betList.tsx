import BetItem from "./betItem";

const FAKE_BETS: IBet[] = [
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
    value: 5.3,
    score: [3, 0],
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
    ],
    value: 5.3,
    score: [3, 0],
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
    ],
    value: 5.3,
    score: [3, 0],
  },
];

const BetList: React.FC = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {FAKE_BETS.map((bet) => (
        <BetItem bet={bet} />
      ))}
    </div>
  );
};

export default BetList;

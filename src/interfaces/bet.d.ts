interface ITeam {
  id: string;
  name: string;
  image: string;
}

interface IBet {
  id: string;
  teams: Array<ITeam>
  score: Array<Number>;  
  value: Number;
  date: string;
}
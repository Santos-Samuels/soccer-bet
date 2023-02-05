export interface IMatch {
  id: string;
  group: string;
  date: string;
  team1: string;
  team2: string;
  isActive: boolean;
}

export interface IFormMatch {
  group: string;
  date: string;
  team1: string;
  team2: string;
  time: string;
}
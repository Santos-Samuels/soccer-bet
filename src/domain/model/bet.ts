import { ITeam } from "./team";

export interface IBet {
  id: string;
  teams: ITeam[];
  score: Number[];  
  value: Number;
  date: string;
}
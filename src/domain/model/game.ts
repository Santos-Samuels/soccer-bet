import { ITeam } from "./team";

export interface IGame {
  id: string;
  teams: ITeam[];
  date: string;
}
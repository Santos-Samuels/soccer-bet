import { IBet } from "../../model/bet";

export default interface IListBets {
  execute(): Promise<IBet[]>
}
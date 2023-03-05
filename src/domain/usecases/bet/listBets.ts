import { IBet } from "../../model/bet";

export default interface IListBets {
  execute(userId?: string): Promise<IBet[]>
}
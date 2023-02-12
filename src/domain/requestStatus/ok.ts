import { HttpStatusCode } from "@data/protocols/http/http-client";

export class Successful extends Error {
  code = HttpStatusCode.ok;
  constructor() {
    super("Requisição bem succedida.");
    this.name = "Successful";
  }
}

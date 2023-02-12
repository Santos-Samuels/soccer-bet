import { HttpStatusCode } from "../../data/protocols/http/http-client";

export class Unauthorized extends Error {
  code = HttpStatusCode.unauthorized;
  constructor() {
    super("Requisição não autorizada.");
    this.name = "Unauthorized";
  }
}

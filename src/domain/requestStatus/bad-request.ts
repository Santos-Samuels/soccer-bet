import { HttpStatusCode } from "@data/protocols/http/http-client";

export class BadRequest extends Error {
  code = HttpStatusCode.badRequest;
  constructor() {
    super("Requisição mal sucedida.");
    this.name = "BadRequest";
  }
}

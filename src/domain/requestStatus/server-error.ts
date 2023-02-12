import { HttpStatusCode } from "@data/protocols/http/http-client";

export class ServerError extends Error {
  code = HttpStatusCode.serverError;
  constructor() {
    super("A server error has occurred. Try again later.");
    this.name = "ServerError";
  }
}

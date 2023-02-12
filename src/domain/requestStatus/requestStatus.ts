import { BadRequest } from "./bad-request";
import { Successful } from "./ok";
import { ServerError } from "./server-error";
import { Unauthorized } from "./unauthorized";

export default class RequestStatus {
  successful() {
    return new Successful();
  }

  badRequest() {
    return new BadRequest();
  }

  serverError() {
    return new ServerError();
  }

  unauthorized() {
    return new Unauthorized();
  }
}

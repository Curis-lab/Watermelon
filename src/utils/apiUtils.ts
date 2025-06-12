export class ResponseError extends Error {
  status: number;
  body: unknown;
  constructor(target: string, status: number, body: unknown) {
    super(`An error occurred while trying to get ${target}`);
    this.name = "ResponseError";
    this.status = status;
    this.body = body;
  }
}

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

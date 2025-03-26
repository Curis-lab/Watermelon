export class ResponseError extends Error{
    status: number;
    body: unknown;
    constructor(
        target: string, status: number, body:unkown
    ){
        super(`An error occurred while trying to get ${target}`);
        this.name = 'ResponseError';
        this.status = status;
        this.body = body;
    }
}
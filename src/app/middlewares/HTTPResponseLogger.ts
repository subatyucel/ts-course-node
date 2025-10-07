import type { NextFunction, Request, Response } from "express";
import type { ExpressMiddlewareInterface } from "routing-controllers";

export class HTTPResponseLogger implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    const { originalUrl, method } = req;
    const { statusCode } = res;

    console.log(
      `Response request: method=${method} path=${originalUrl} statusCode=${statusCode}`
    );
  }
}

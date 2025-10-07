import type { NextFunction, Request, Response } from "express";
import type { ExpressMiddlewareInterface } from "routing-controllers";
import { Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export class HTTPRequestLogger implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    const { originalUrl, method, body } = req;

    console.log(
      `Received request: method=${method} path=${originalUrl} body=${JSON.stringify(
        body
      )}`
    );
    next();
  }
}

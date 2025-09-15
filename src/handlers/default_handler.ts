import type { Request, RequestHandler, Response } from "express"

export const defaultHandler: RequestHandler = ((
  _req: Request,
  res: Response,
) => {
  res.status(404).json({
    pam: "Hi, this is Dunder Mifflin NeoPaper Company! How can I help you?",
  })
}) satisfies RequestHandler

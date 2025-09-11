import type { RequestHandler } from "express"

export const getHealth: RequestHandler = ((_, res) => {
	res.json({ status: "ok" })
}) satisfies RequestHandler

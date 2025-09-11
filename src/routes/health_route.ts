import { Router } from "express"
import { getHealth } from "../handlers/get_health.ts"

export const healthRouter: Router = Router()

healthRouter.get("/", getHealth)

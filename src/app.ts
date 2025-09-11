import type { Application } from "express"
import express from "express"
import { defaultHandler } from "./handlers/default_handler.ts"
import { healthRouter } from "./routes/health_route.ts"

export const app: Application = express()

app.use(express.json())
app.use("/health", healthRouter)

app.use(defaultHandler)

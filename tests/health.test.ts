import type { Server } from "node:http"
import { afterAll, beforeAll, describe, test } from "vitest"
import { app } from "../src/app.ts"
import { PORT } from "../src/env.ts"

describe.concurrent("GET /health", () => {
	let server: Server | undefined

	beforeAll(() => {
		server = app.listen(PORT, () => {
			console.log(`🚀 Server running on port ${PORT}`)
		})
	})

	afterAll(async () => {
		await new Promise((resolve, reject) => {
			server?.close(err => {
				if (err) {
					reject(err)
					return
				}

				resolve(err)
			})
		})
	})

	test("should return status ok", async ({ expect }) => {
		const res = await fetch(`http://localhost:${PORT}/health`)
		expect(res.status).toBe(200)

		const json: unknown = await res.json()
		expect(json).toEqual({ status: "ok" })
	})
})

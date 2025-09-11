import { app } from "./app.ts"
import { PORT } from "./env.ts"

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`)
})

import express from "express";
import healthRouter from "./routes/health.route.ts";

const app: express.Application = express();

app.use(express.json());
app.use("/health", healthRouter);

// Default fallback route handler for unmatched routes
app.use((_req: express.Request, res: express.Response) => {
	res.status(404).json({
    pam: 'Hi, this is Dunder Mifflin NeoPaper Company! How can I help you?'
  });
});

export default app;

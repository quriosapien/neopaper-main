import express from "express";

export const getHealth = (req: express.Request, res: express.Response) => {
  res.json({ status: "ok" });
};
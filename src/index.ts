import express from "express";
import type { Request, Response } from "express";
import { search } from "./modules/searching.js";
import dotenv from "dotenv";
import { insert } from "./modules/insert.js";
import "./consumer/services/kafka.js"
dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});
app.get("/search", search)
app.post("/insert", insert)
app.listen(3000, () => {
  console.log("Server started");
});
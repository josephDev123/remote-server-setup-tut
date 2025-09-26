import express from "express";
import { router } from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(port, () => console.log(`listening on port ${port}`));

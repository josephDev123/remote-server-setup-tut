import express from "express";
import { router } from "./routes.js";
const port = process.env.PORT || 1000;
const app = express();

app.use("/v1", router);

app.listen(port, () => console.log(`listening on port ${port}`));

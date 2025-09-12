import express from "express";
const port = process.env.PORT || 1000;
const app = express();

app.use("/", (req, res) => {
  res.json({ data: [], msg: "data is life" });
  return;
});

app.use("/create", (req, res) => {
  res.json({ data: [], msg: "" });
  return;
});
app.listen(port, () => console.log(`listening on port ${port}`));

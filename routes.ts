import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ data: ["index"], msg: "index of life" });
  return;
});
router.get("/find", (req, res) => {
  res.json({ data: ["find data"], msg: "data is life" });
  return;
});

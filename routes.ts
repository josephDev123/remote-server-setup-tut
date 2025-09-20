import { Router } from "express";
import { Controller } from "./controller.js";

export const router = Router();
const controller = new Controller();

router.get("/", controller.index);
router.post("/create", controller.create);

router.get("/find", controller.find);

router.delete("/delete", controller.delete);

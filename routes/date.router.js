import express from "express";
import { dateHandler, emptyHandler } from "../controller/date.controller.js";
const router = express.Router();

router.route("/:date").get(dateHandler);
router.route("").get(emptyHandler);

export default router;

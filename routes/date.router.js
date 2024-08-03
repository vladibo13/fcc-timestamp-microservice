import express from "express";
import { dateHandler } from "../controller/date.controller.js";
const router = express.Router();

router.route("/:date").get(dateHandler);

export default router;

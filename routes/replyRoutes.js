import express from "express";
const replyRoutes = express.Router();
import {
  insertReply,
  getReplys,
  pushGood,
  pushBad,
} from "../controllers/replyControllers.js";

replyRoutes.post("/insert", insertReply);
replyRoutes.get("/get", getReplys);
replyRoutes.get("/pushgood", pushGood);
replyRoutes.get("/pushbad", pushBad);

export default replyRoutes;

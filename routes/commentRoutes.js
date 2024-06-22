import express from "express";
const commentRoutes = express.Router();
import {
  insertComment,
  getComments,
  pushGood,
  pushBad,
} from "../controllers/commentControllers.js";

commentRoutes.post("/insert", insertComment);
commentRoutes.get("/get", getComments);
commentRoutes.get("/pushgood", pushGood);
commentRoutes.get("/pushbad", pushBad);

export default commentRoutes;

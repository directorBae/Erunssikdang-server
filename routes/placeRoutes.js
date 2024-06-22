import express from "express";
const placeRoutes = express.Router();
import {
  createPlace,
  searchPlace,
  getPlaceByID,
} from "../controllers/placeControllers.js";

placeRoutes.get("/create", createPlace);
placeRoutes.get("/search", searchPlace);
placeRoutes.get("/get", getPlaceByID);

export default placeRoutes;

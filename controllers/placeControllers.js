import Place from "../models/placeModels.js";

const createPlace = (req, res) => {
  const placeData = req.body;
  Place.insert(placeData, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error inserting data" });
      return;
    }
    res.status(201).json({ message: "User created", data: result });
  });
};

const searchPlace = (req, res) => {
  const keyword = req.query.keyword;

  Place.getName(keyword, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error getting data" });
      return;
    }
    res.status(200).json({ result: result });
  });
};

const getPlaceByID = (req, res) => {
  const placeID = req.query.id;
  Place.getPlaceByID(placeID, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error getting data" });
      return;
    }
    res.status(200).json({ result: result });
  });
};

export { createPlace, searchPlace, getPlaceByID };

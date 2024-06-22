import db from "../config/db.js";

const Place = {
  insert: (placeData, callback) => {
    const query = "INSERT INTO place (name) VALUES (?)";
    db.query(query, ["안녕"], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getName: (keyword, callback) => {
    const query = "SELECT * FROM place WHERE name = ?";
    db.query(query, [keyword], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getPlaceByID: (placeID, callback) => {
    const query = "SELECT * FROM place WHERE id = ?";
    db.query(query, [placeID], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

export default Place;

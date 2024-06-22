import db from "../config/db.js";

const Place = {
  insert: (placeData, callback) => {
    const query =
      "INSERT INTO place (name, address, x, y, runtime) VALUES (?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        placeData.name,
        placeData.address,
        placeData.x,
        placeData.y,
        placeData.runtime,
      ],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  getName: (keyword, callback) => {
    const query = "SELECT * FROM place WHERE name LIKE ?";
    const values = [`%${keyword}%`];

    db.query(query, values, (err, results) => {
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

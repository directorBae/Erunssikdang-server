import db from "../config/db.js";

const Comment = {
  insert: (commentData, callback) => {
    const query =
      "INSERT INTO comment (place_id, writer, date, content, rate, image, good, bad, num_reply) VALUES (?, ?, now(), ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        commentData.place_id,
        commentData.writer,
        commentData.content,
        commentData.rate,
        commentData.image,
        commentData.good,
        commentData.bad,
        commentData.num_reply,
      ],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  getComments: (placeId, callback) => {
    const query = "SELECT * FROM comment WHERE place_id = ?";

    db.query(query, [placeId], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  pushGood: (commentID, callback) => {
    const query = "UPDATE comment SET good = good + 1 WHERE id = ?";

    db.query(query, [commentID], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  pushBad: (commentID, callback) => {
    const query = "UPDATE comment SET bad = bad + 1 WHERE id = ?";

    db.query(query, [commentID], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

export default Comment;

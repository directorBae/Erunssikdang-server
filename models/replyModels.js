import db from "../config/db.js";

const Reply = {
  insert: (replyData, callback) => {
    const query =
      "INSERT INTO comment (place_id, writer, date, content, good, bad) VALUES (?, ?, now(), ?, ?, ?)";
    db.query(
      query,
      [
        replyData.place_id,
        replyData.writer,
        replyData.content,
        replyData.good,
        replyData.bad,
      ],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  getReplys: (replyId, callback) => {
    const query = "SELECT * FROM reply WHERE comment_id = ?";

    db.query(query, [replyId], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  pushGood: (replyID, callback) => {
    const query = "UPDATE reply SET good = good + 1 WHERE id = ?";

    db.query(query, [replyID], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  pushBad: (replyID, callback) => {
    const query = "UPDATE reply SET bad = bad + 1 WHERE id = ?";

    db.query(query, [replyID], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

export default Reply;

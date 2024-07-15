import db from "../config/db.js";

const Comment = {
  insert: (commentData, callback) => {
    const writerMakelist1 = [
      "잘생긴",
      "못생긴",
      "기분나쁜",
      "불쾌한",
      "역겨운",
      "재수없는",
      "짜증나는",
      "행복한",
      "길쭉한",
      "짤막한",
      "뚱뚱한",
      "날씬한",
      "키작은",
      "큰",
    ];
    const writerMakelist2 = [
      "너구리",
      "기린",
      "돼지",
      "어머니",
      "아버지",
      "아들",
      "딸",
      "아줌마",
      "아저씨",
      "나무늘보",
      "켄타우로스",
      "파리지옥",
      "사이다",
      "호리병",
      "칵테일",
      "향유고래",
    ];

    const writer =
      writerMakelist1[Math.floor(Math.random() * writerMakelist1.length)] +
      " " +
      writerMakelist2[Math.floor(Math.random() * writerMakelist2.length)];

    const query =
      "INSERT INTO comment (place_id, writer, date, content, rate, image, good, bad, num_reply) VALUES (?, ?, now(), ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        commentData.place_id,
        writer,
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
    const query = "SELECT * FROM comment WHERE place_id = ? ORDER BY date DESC";

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

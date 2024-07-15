import Comment from "../models/commentModels.js";

const insertComment = (req, res) => {
  const placeId = req.query.id;
  const commentData = req.body.data;
  Comment.insert(commentData, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error inserting data" });
      return;
    }
    res.status(201).json({ message: "User created", data: result });
  });
};

const getComments = (req, res) => {
  const placeId = req.query.id;
  Comment.getComments(placeId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error getting data" });
      return;
    }
    res.status(200).json({ result: result });
  });
};

const pushGood = (req, res) => {
  const commentID = req.params.id;
  Comment.pushGood(commentID, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error updating data" });
      return;
    }
    res.status(200).json({ message: "Good updated", data: result });
  });
};

const pushBad = (req, res) => {
  const commentID = req.params.id;
  Comment.pushBad(commentID, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error updating data" });
      return;
    }
    res.status(200).json({ message: "Bad updated", data: result });
  });
};

export { insertComment, getComments, pushGood, pushBad };

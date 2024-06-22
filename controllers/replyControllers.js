import Reply from "../models/replyModels.js";

const insertReply = (req, res) => {
  const replyData = req.body;
  Reply.insert(replyData, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error inserting data" });
      return;
    }
    res.status(201).json({ message: "User created", data: result });
  });
};

const getReplys = (req, res) => {
  const commentId = req.params.id;
  Reply.getReplys(commentId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error getting data" });
      return;
    }
    res.status(200).json({ result: result });
  });
};

const pushGood = (req, res) => {
  const replyID = req.params.id;
  Reply.pushGood(replyID, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error updating data" });
      return;
    }
    res.status(200).json({ message: "Good updated", data: result });
  });
};

const pushBad = (req, res) => {
  const replyID = req.params.id;
  Reply.pushBad(replyID, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error updating data" });
      return;
    }
    res.status(200).json({ message: "Bad updated", data: result });
  });
};

export { insertReply, getReplys, pushGood, pushBad };

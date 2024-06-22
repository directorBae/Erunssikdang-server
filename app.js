import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

import placeRoutes from "./routes/placeRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import replyRoutes from "./routes/replyRoutes.js";

app.use("/api/place", placeRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/reply", replyRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

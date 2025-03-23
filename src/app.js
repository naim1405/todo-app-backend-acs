import express from "express";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

app.use(router);
app.get("/test", (req, res, next) => {
  res.send("working");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

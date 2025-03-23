import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { routes } from "./modules/routes.js";
import { CustomError } from "./helper/customError.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(router);
app.get("/test", (req, res, next) => {
  res.send("Server running");
});

app.use("/api", routes);

app.use("*", (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404,
  );
  next(err);
});
app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

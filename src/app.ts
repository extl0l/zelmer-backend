import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import bodyParser from "body-parser";
import mongoSanitize from "express-mongo-sanitize";
import opinionRouter from "./routes/opinionRouter";
import cors from "cors";

dotenv.config({});

const app = express();

const limiter = rateLimit({
  windowMs: 10000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP. Try again in a moment.",
});

app.use(cors());

app.options("*", cors());

app.use("/api", limiter);
app.use(helmet());
app.use(bodyParser.json());
app.use(mongoSanitize());

app.use("/api/v1/opinion", opinionRouter);

export default app;

import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import cors from "cors";
import mysql from "mysql";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

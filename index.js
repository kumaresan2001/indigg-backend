import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
const app = express();
import cors from "cors";
app.use(express.json());
import tournamentRouter from "./router/tournament.router.js";
import participantRouter from "./router/participant.router.js";
app.use(cors());
app.use("/tournament", tournamentRouter);
app.use("/participant", participantRouter);

const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1:27017";

// console.log(process.env.MONGO_URL);

const MONGO_URL = process.env.MONGO_URL;

export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 hi");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

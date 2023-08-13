import express from "express";
import {
  posttournament,
  alltournament,
  idbytournment,
  updatetournament,
  deletetournament,
} from "../service/tournament.service.js";

const router = express.Router();

//post tournament
router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await posttournament(data);

  result
    ? response.send({ message: "post tournment is successful" })
    : response.status(404).send({ message: "tournment is not" });
});

// all tournament
router.get("/", async function (request, response) {
  const result = await alltournament(request.query);
  result
    ? response.send(result)
    : response.status(404).send({ message: " tournament is not" });
});

// idby tournament
router.get("/:id", async function (request, response) {
  const { id } = request.params;

  const result = await idbytournment(id);
  result
    ? response.send(result)
    : response.status(404).send({ message: "tournament is not" });
});

// update tournament
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;

  const result = await updatetournament(id, data);

  response.send(result);
});

// delete tournament
router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const result = await deletetournament(id);
  result.deletedCount >= 1
    ? response.send({ message: "delete tournament is successful" })
    : response.status(404).send({ message: "tournament is not" });
});

export default router;

import express from "express";
import {
  postparticipant,
  allparticipant,
  idbyparticipant,
  updateparticipant,
  deleteparticipant,
} from "../service/participant.service.js";
const router = express.Router();

// post participant
router.post("/", async function (request, response) {
  const data = request.body;
  const result = await postparticipant(data);
  result
    ? response.send({ message: "post participant is successful" })
    : response.status(404).send({ message: "participant is not" });
});

// all participant
router.get("/", async function (request, response) {
  const result = await allparticipant(request.query);

  response.send(result);
});

// idby participant
router.get("/:id", async function (request, response) {
  const { id } = request.params;

  const result = await idbyparticipant(id);
  result
    ? response.send(result)
    : response.status(404).send({ message: "participant is not" });
});

// idby participant
router.get("/:id", async function (request, response) {
  const { id } = request.params;

  const result = await idbyparticipant(id);
  result
    ? response.send(movie)
    : response.status(404).send({ message: "participant is not" });
});

// update participant
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;

  const result = await updateparticipant(id, data);

  response.send(result);
});

// delete participant
router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const result = await deleteparticipant(id);
  result.deletedCount >= 1
    ? response.send({ message: "delete participant is successful" })
    : response.status(404).send({ message: "participant is not" });
});
export default router;

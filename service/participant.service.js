import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function postparticipant(data) {
  return await client.db("indigg").collection("participant").insertOne(data);
}

export async function allparticipant(query) {
  return await client
    .db("indigg")
    .collection("participant")
    .find(query)
    .toArray();
}

export async function idbyparticipant(id) {
  console.log(typeof id, id);
  return await client
    .db("indigg")
    .collection("participant")
    .findOne({ _id: new ObjectId(id) });
}

export async function updateparticipant(id, data) {
  return await client
    .db("indigg")
    .collection("participant")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deleteparticipant(id) {
  return await client
    .db("indigg")
    .collection("participant")
    .deleteOne({ _id: new ObjectId(id) });
}

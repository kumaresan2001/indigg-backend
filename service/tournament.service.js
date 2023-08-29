import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function posttournament(data) {
  return await client.db("tourn").collection("tournaments").insertOne(data);
}

export async function alltournament(query) {
  return await client
    .db("tourn")
    .collection("tournaments")
    .find(query)
    .toArray();
}

export async function idbytournment(id) {
  console.log(typeof id, id);
  return await client
    .db("tourn")
    .collection("tournaments")
    .findOne({ _id: new ObjectId(id) });
}

export async function updatetournament(id, data) {
  return await client
    .db("tourn")
    .collection("tournaments")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deletetournament(id) {
  return await client
    .db("tourn")
    .collection("tournaments")
    .deleteOne({ _id: new ObjectId(id) });
}

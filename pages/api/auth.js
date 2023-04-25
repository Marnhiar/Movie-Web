import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const database = "web";

export default async function handler(req, res) {
  let result = null;
  if (req.method === "GET")
    result = await get(req);
  
  res.status(200).json({"auth": result});
}

const get = async (req) => {
  const {username, password} = req.body;
  await client.connect();
  const db = client.db(database);
  const collection = db.collection('users');
  const movies = await collection.find({username: username, password: password}).toArray();
  if (movies.length != 0)
    return true;
  return false;
}
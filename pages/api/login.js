import { MongoClient } from 'mongodb';
import NextCors from 'nextjs-cors';

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const database = "web";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  let result = null;
  if (req.method === "POST")
    result = await post(req);

  if (result)
    res.status(200).json("Successful");
  res.status(401).json("Wrong username or password");
}

const post = async (req) => {
  await client.connect();
  const db = client.db(database);
  const collection = db.collection('users');
  const login = await collection.findOne(req.body);
  if (!login)
    return false;
  return true;
}
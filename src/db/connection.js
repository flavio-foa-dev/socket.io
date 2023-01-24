import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = 'socketio';

const conecction = new MongoClient(url);

try {
  await conecction.connect()
  const db = conecction.db(dbName)
  const documents = db.collection(dbName)
  console.log(documents)
} catch (error) {
  console.error(error.message);
}

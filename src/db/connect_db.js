import { MongoClient } from "mongodb"
import 'dotenv/config';


const  client = new MongoClient(process.env.MONGODB_URI)
const dbName = process.env.DB_NAME

client.connect();
console.log("Conectado correctamente a mongo db");
const db = client.db(dbName);
//const collection = db.collection('usuarios')

export {db, client}
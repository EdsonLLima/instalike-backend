import ConnectBank from "../config/dbconfig.js";
const connection = await ConnectBank(process.env.STRING_CONNECTION);

export default async function getAllPosts() {
  const db = connection.db("instabyte-imersao")
  const collection = db.collection("posts")
  return collection.find().toArray()
}
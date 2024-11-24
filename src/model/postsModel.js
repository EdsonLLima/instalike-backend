import ConnectBank from "../config/dbconfig.js";
const connection = await ConnectBank(process.env.STRING_CONNECTION);

export async function getAllPosts() {
  const db = connection.db("instabyte-imersao")
  const collection = db.collection("posts")
  return collection.find().toArray()
}


export async function createPost(newPost) {
  const db = connection.db("instabyte-imersao")
  const collection = db.collection("posts")
  return collection.insertOne(novoPost)
}
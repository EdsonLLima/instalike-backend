import fs from "fs";
import { createPost, getAllPosts } from "../model/postsModel.js";

export async function postsList(req, res) {
  const postsResult = await getAllPosts();
  res.status(200).json(postsResult);
}

export async function createNewPost(req, res) {
  const newPost = req.body;
  try {
    const postCreated = await createPost(newPost)
    res.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }

}

export async function uploadImage(req, res) {
  const newPost = {
    description: "Um gatinho fofo breto e branco.",
    imageURL: req.file.originalname,
    alt: ""
  }
  try {
    const postCreated = await createPost(newPost)
    const updatedImage = `uploads/${postCreated.insertedId}.png`
    fs.renameSync(req.file.path, updatedImage)
    res.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}
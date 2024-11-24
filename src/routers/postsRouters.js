import express from "express";
import multer from "multer";
import { createNewPost, postsList, uploadImage } from "../controllers/postsController.js";

const upload = multer({ dest: "./uploads" })

const routes = (app) => {
  app.use(express.json())
  app.get("/posts", postsList);
  app.post("/posts", createNewPost)
  app.post("/upload", upload.single("image"), uploadImage)
}

export default routes;


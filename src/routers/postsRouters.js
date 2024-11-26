import cors from "cors";
import express from "express";
import multer from "multer";
import { createNewPost, postsList, updateNewPost, uploadImage } from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8008",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads", storage })

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.get("/posts", postsList);
  app.post("/posts", createNewPost)
  app.post("/upload", upload.single("image"), uploadImage)
  app.put("/upload/:id", updateNewPost)
}

export default routes;


import express from "express";
import { postsList } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json())
  app.get("/posts", postsList);
  app.post("/posts",)
}

export default routes;


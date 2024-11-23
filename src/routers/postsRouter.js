import express from "express";
import { postsList } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json())
  app.get("/posts", postsList);
}

export default routes;


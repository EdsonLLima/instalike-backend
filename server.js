import express from "express";
import routes from "./src/routers/postsRouters.js";

const app = express();
routes(app)

app.listen(3000, () => {
  console.log("servidor escutando...");
});





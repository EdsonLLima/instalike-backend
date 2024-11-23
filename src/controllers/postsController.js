import getAllPosts from "../model/postsModel.js";

export async function postsList(req, res) {
  const postsResult = await getAllPosts()
  res.status(200).json(postsResult);
}
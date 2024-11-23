import express from "express";

const posts = [
  {
    description: "Um gatinho muito fofo dormindo.",
    image: "https://placecats.com/garfield/300/150",
    id: 1
  },
  {
    description: "Um gato curioso olhando pela janela.",
    image: "https://placecats.com/smoke/300/150",
    id: 2
  },
  {
    description: "Um gato brincando com um novelo de lã.",
    image: "https://placecats.com/felix/300/150",
    id: 3
  },
  {
    description: "Um gato se escondendo em uma caixa.",
    image: "https://placecats.com/whiskers/300/150",
    id: 4
  },
  {
    description: "Um gato tomando sol na janela.",
    image: "https://placecats.com/ginger/300/150",
    id: 5
  },
  {
    description: "Um gato preto fazendo careta.",
    image: "https://placecats.com/blackie/300/150",
    id: 6
  }
];

const app = express();
app.use(express.json())
app.listen(3000, () => {
  console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function searchPostId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}
app.get("/posts/:id", (req, res) => {
  const index = searchPostId(req.params.id)
  res.status(200).json(posts[index]);
});

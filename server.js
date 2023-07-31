const express = require("express");

const PORT = 4000;
const HOST = "0.0.0.0";

const Users = [
  {
    id: 0,
    name: "Jack",
  },
  {
    id: 1,
    name: "Jennifer",
  },
];

const app = express();

app.get("/users", (req, res) => {
  res.json(Users);
});

app.get("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

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
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`${diffTime} ms`);
});

app.post("/users", (req, res) => {
  const newUser = {
    name: req.body.name,
    id: Users.length,
  };
  Users.push(newUser);
  res.json(newUser);
});

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

const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

server.get("/", (req, res) => {
  res.send("Project server launched!");
});

server.get("/users", (req, res) => {
  res.send([
    {
      id: 1,
      user: "logger1",
    },
    {
      id: 2,
      user: "logger2",
    },
    {
      id: 3,
      user: "logger3",
    },
  ]);
});

server.listen(3000, (req, res) => console.log("Server Launched!!!"));

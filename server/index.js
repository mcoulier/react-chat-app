const express = require("express");
const app = express();
const { createServer } = require("http");
const server = createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

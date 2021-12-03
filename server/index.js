const express = require("express");
const app = express();
const { createServer } = require("http");
const server = createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);
const port = 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

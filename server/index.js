const express = require("express");
const app = express();
const { createServer } = require("http");
const server = createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);
const port = 8080;
const cors = require("cors");

const { addUser, removeUser, getUser } = require("./users");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("join", ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });

    if (error) return callback(error);

    socket.join(user.room);
  });

  socket.on("send message", (msg, username) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", msg);
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

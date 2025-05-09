const express = require("express");
const app = express();

app.use(express.static("public")); //for serving the static files
const expressServer = app.listen(4000);

//socket.io server
const socketio = require("socket.io");

const io = socketio(expressServer, {});

io.on("connect", (socket) => {
  console.log(socket.id, "has joined our server");

  socket.emit("welcome", "welcome to our server. Feel at home");
});

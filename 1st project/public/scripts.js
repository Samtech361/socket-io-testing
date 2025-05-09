//io() connects to the server at the url
const socket = io("http://localhost:4000");

socket.on("connect", alert("server connected successfully"));

socket.on("welcome", (data) => {
  alert(data);
});

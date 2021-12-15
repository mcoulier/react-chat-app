import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

let socket;

export default function Chat() {
  const server = "localhost:8080";
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { username, room } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    socket = io(server);
  }, [server]);

  useEffect(() => {
    socket.emit("join", { username, room }, (error) => {
      if (error) {
        navigate("/");
        alert(error);
      }
    });
  }, [username, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  console.count("counter");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("send message", message);
      setMessage("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pt: 5,
        }}
      >
        <Messages messages={messages} room={room} />
        <TextField
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          label="Type something"
          variant="outlined"
          sx={{
            mb: 2,
            mt: 2,
          }}
        />
        <Button variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
}

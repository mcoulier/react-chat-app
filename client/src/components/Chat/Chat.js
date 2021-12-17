import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import MessageField from "../MessageField/MessageField";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      }
    });
  }, [username, room, navigate]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

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
          pt: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            pb: 2,
            fontWeight: 600,
          }}
        >
          {`Room - #${room}`}
        </Typography>
        <Messages messages={messages} room={room} />
        <MessageField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Box>
    </Container>
  );
}

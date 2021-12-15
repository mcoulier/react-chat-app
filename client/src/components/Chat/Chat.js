import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "../Messages/Messages";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let socket;

export default function Chat() {
  const server = "localhost:8080";
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  //const [time, setTime] = useState(null);
  const { username, room } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    socket = io(server);
    socket.emit("join", { username, room }, (error) => {
      if (error) {
        navigate("/");
        alert(error);
      }
    });
  }, [server, username, room, navigate]);

  useEffect(() => {
    socket.on("message", (message) =>
      setMessages((messages) => [...messages, message])
    );
  }, []);

  console.count("counter");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      //const currentDate = new Date();
      //setTime(currentDate.getHours() + ":" + currentDate.getMinutes());
      socket.emit("send message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={sendMessage}>Send</button>
      <Messages messages={messages} time={time} />
    </div>
  );
}

import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "../Messages/Messages";

let socket;

export default function Chat() {
  const server = "localhost:8080";
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io(server);
  }, [server]);

  useEffect(() => {
    socket.on("message", (message) => setMessages([...messages, message]));
  });

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
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
      <Messages messages={messages} />
    </div>
  );
}

import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

function App() {
  const server = "localhost:8080";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(server);
  }, [server]);

  useEffect(() => {
    socket.on("chat message", (message) => setMessages([...messages, message]));
  });

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("chat message", message);
      setMessage("");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={sendMessage}>Send</button>
      {messages.map((msg) => (
        <li>{msg}</li>
      ))}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

function App() {
  const server = "localhost:8080";
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io(server);
  }, [server]);

  useEffect(() => {
    socket.emit("chat message", message);
  }, [message]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </div>
  );
}

export default App;

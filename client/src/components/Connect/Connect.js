import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Connect() {
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    if (!username) {
      return alert("Please enter a username");
    }
    setIsConnected(true);
  };

  return (
    <div>
      {isConnected ? (
        <Navigate to={`/chat/${username}`} />
      ) : (
        <>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Enter a username"
          />
          <button onClick={handleConnect} type="submit">
            Connect
          </button>
        </>
      )}
    </div>
  );
}

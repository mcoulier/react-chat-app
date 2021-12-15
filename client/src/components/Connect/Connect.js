import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connect() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  let navigate = useNavigate();

  const handleConnect = () => {
    if (!username || !room) {
      return alert("Please enter all fields");
    }
    navigate(`/chat/${username}/${room}`);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Enter a username"
      />
      <input
        type="text"
        onChange={(e) => setRoom(e.target.value)}
        value={room}
        placeholder="Enter room name"
      />
      <button onClick={handleConnect} type="submit">
        Connect
      </button>
    </>
  );
}

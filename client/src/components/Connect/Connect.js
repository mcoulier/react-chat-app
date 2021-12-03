import { useState } from "react";

export default function Connect() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </div>
  );
}

import React from "react";

export default function Messages({ messages }) {
  return (
    <div>
      <h1>Messages</h1>
      {messages.map((msg) => (
        <li>{msg}</li>
      ))}
    </div>
  );
}

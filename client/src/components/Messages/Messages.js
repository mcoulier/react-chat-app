import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Messages({ messages, room }) {
  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      sx={{
        backgroundColor: "#D9E1D9",
        borderRadius: "5px",
        height: "60vh",
        overflow: "auto",
        p: 2,
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
      <Box sx={{ borderTop: "1px solid" }}>
        {messages.map(({ username, message, time, index }) => (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ fontWeight: 400, mt: 2 }}>
              {username}
              <Typography
                variant="caption"
                sx={{
                  ml: 0.5,
                  fontWeight: 300,
                }}
              >
                -{time}
              </Typography>
            </Typography>
            <Typography variant="body1" key={index} sx={{ mt: 1.5 }}>
              {message}
            </Typography>
          </Box>
        ))}
        <div ref={messagesRef} />
      </Box>
    </Box>
  );
}

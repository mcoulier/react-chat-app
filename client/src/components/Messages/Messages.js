import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Messages({ messages }) {
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
      {messages.map(({ username, message, time, id }) => (
        <Box key={id} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, fontSize: "1.4rem", mt: 2 }}
          >
            {username}
            <Typography
              variant="caption"
              sx={{
                ml: 0.5,
                fontWeight: 300,
              }}
            >
              - {time}
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1.5, fontWeight: 300, lineHeight: 1.7 }}
          >
            {message}
          </Typography>
        </Box>
      ))}
      <div ref={messagesRef} />
    </Box>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Messages({ messages, room }) {
  console.log(messages);
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        borderRadius: "5px",
        height: "40vh",
        overflow: "auto",
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", pb: 2 }}>
        {`Room - ${room}`}
      </Typography>
      {messages.map(({ username, message, time, index }) => (
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5">{username}:</Typography>
          <Typography variant="body1" key={index}>
            {message}
          </Typography>
          <Typography variant="caption">{time}</Typography>
        </Box>
      ))}
    </Box>
  );
}

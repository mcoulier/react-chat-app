import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";

export default function MessageField({ message, setMessage, sendMessage }) {
  return (
    <TextField
      type="text"
      onChange={(e) => setMessage(e.target.value)}
      value={message}
      label="Type something"
      variant="outlined"
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      sx={{
        mb: 2,
        mt: 2,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SendIcon sx={{ cursor: "pointer" }} onClick={sendMessage} />
          </InputAdornment>
        ),
      }}
    />
  );
}

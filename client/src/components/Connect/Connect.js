import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 5,
        }}
      >
        <TextField
          label="Enter a username"
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          value={username}
          required
          sx={{
            pb: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="text"
          onChange={(e) => setRoom(e.target.value)}
          value={room}
          label="Enter room name"
          variant="outlined"
          required
          sx={{
            pb: 2,
          }}
        />
        <Button variant="contained" onClick={handleConnect} type="submit">
          Connect
        </Button>
      </Box>
    </Container>
  );
}

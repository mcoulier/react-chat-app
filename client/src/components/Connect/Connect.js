import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AlertDialog from "../AlertDialog/AlertDialog";

export default function Connect() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  let navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  const handleConnect = () => {
    const name = username.trim();
    const roomval = room.trim();

    if (!name || !roomval) {
      return setShowDialog(true);
    }
    navigate(`/chat/${username}/${room}`);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5,
          backgroundColor: "#D9E1D9",
        }}
      >
        <TextField
          label="Enter a username"
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          value={username}
          required
          inputProps={{
            maxLength: 20,
          }}
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
          inputProps={{
            maxLength: 20,
          }}
          sx={{
            pb: 2,
          }}
        />
        <Button variant="contained" onClick={handleConnect} type="submit">
          Connect
        </Button>
        {showDialog && (
          <AlertDialog open={showDialog} setShowDialog={setShowDialog} />
        )}
      </Box>
    </Container>
  );
}

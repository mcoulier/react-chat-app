import Chat from "./components/Chat/Chat";
import Connect from "./components/Connect/Connect";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#9CBBF0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: 4,
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 700,
          textShadow: "1px 2px 0px white",
        }}
        color="primary"
      >
        Chat App
      </Typography>
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/chat/:username/:room" element={<Chat />} />
      </Routes>
    </Box>
  );
}

export default App;

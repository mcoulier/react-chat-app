import Chat from "./components/Chat/Chat";
import Connect from "./components/Connect/Connect";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#9CBBF0",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/chat/:username/:room" element={<Chat />} />
      </Routes>
    </Box>
  );
}

export default App;

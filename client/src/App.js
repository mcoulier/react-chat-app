import Chat from "./components/Chat/Chat";
import Connect from "./components/Connect/Connect";
import { Routes, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "./components/images/logo.png";

function App() {
  return (
    <Box
      sx={{
        backgroundImage:
          "radial-gradient(circle, #9cbbf0, #8aa7e4, #7b93d7, #6e7ec9, #636abb)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 5,
          mt: 2,
          textDecoration: "none",
        }}
      >
        <Link to="/">
          <img alt="" src={logo} height={80} width={80} />
        </Link>
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 700,
            textShadow: "3px 1px 0px #6691EE",
            pl: 2,
          }}
          color="primary"
        >
          Chat App
        </Typography>
      </Box>
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/chat/:username/:room" element={<Chat />} />
      </Routes>
    </Box>
  );
}

export default App;

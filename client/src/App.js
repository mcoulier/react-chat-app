import Chat from "./components/Chat/Chat";
import Connect from "./components/Connect/Connect";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Connect />} />
      <Route path="/chat/:username" element={<Chat />} />
    </Routes>
  );
}

export default App;

import { useEffect } from "react";
import { io } from "socket.io-client";


function App() {
  const socket = io();
  console.log(socket)

  return <div className="App"></div>;
}

export default App;

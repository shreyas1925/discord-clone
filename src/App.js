import React from "react";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <SideBar />

      <Chat />
    </div>
  );
};

export default App;

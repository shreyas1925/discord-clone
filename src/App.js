import React from "react";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import "./App.css";
import { selectUser } from "./features/UserSlice";
import { useSelector } from "react-redux";
import Login from "./Components/Login";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;

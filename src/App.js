import React, { useEffect } from "react";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import "./App.css";
import { selectUser } from "./features/UserSlice";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUserLogin, setSignOut } from "./features/UserSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("yes");
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Now to push again ou result into the store we gonna use dispatch
        console.log(authUser);
        dispatch(
          setUserLogin({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(setSignOut());
      }
    });
  }, [dispatch]);

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

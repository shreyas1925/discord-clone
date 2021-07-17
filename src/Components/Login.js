import React from "react";
import { Button } from "@material-ui/core";
import { Fade } from "react-reveal";
import "../styles/Login.css";
import { auth, provider } from "../firebase";
import loginimage from "./logo.png";

const Login = () => {
  const login = () => {
    auth.signInWithPopup(provider).then((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <Fade top>
          <img
            src={loginimage}
            // src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
            // src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
            alt="discord logo"
            alt=""
          />
        </Fade>
      </div>

      <Button onClick={login} className="button">
        Signin
      </Button>
    </div>
  );
};

export default Login;

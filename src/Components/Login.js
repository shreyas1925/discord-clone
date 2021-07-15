import React from "react";
import "../styles/Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
          // src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/233px-Discord_logo.svg.png"
          alt="discord logo"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Signin</Button>
    </div>
  );
};

export default Login;

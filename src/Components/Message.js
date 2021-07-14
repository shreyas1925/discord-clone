import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Message.css";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          shreyas1925
          <span className="message__timestamp">this is a timestamp div</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
};

export default Message;

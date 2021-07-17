import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Message.css";

const Message = ({ timestamp, user, message }) => {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}{" "}
          <small className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </small>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;

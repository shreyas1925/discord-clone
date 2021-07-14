import AddCircleIcon from "@material-ui/icons/AddCircle";
import React from "react";
import "../styles/Chat.css";
import ChatHeader from "./ChatHeader";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages"></div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" style={{ cursor: "pointer" }} />
        <form action="">
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
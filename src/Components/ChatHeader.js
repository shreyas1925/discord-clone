import React, { useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

import SideBarChannel from "./SideBarChannel";
const ChatHeader = ({ channelName }) => {
  const [input, setInput] = useState("");

  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName ? channelName : "Channel"}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        {/* <SideBarChannel input="s" /> */}
        <form>
          {/* {input} */}
          <div className="chatHeader__search">
            <input
              type="text"
              value={input}
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
            />

            <SearchRoundedIcon type="submit" />
          </div>
        </form>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;

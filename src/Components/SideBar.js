import React from "react";
import "../styles/SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SideBarChannel from "../Components/SideBarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import HeadsetIcon from "@material-ui/icons/Headset";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Shreyas Discord Clone</h3>
        <ExpandMoreIcon className="topIcon" />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelheader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar
          className="profile"
          src="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?cs=srgb&dl=pexels-cottonbro-5119214.jpg&fm=jpg"
        />
        <div className="sidebar__profileInfo">
          <h3>shreyas19</h3>
          <p>#82828hhhs</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

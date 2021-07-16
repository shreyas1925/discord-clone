import React from "react";
import "../styles/SideBar.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";

const SideBarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  const handleChannel = () => {
    dispatch(setChannelInfo({ channelId: id, channelName: channelName }));
  };
  return (
    <div className="sidebarChannel" onClick={handleChannel}>
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SideBarChannel;

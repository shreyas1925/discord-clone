import React from "react";
import "../styles/SideBar.css";

const SideBarChannel = ({ id, channel }) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel_hash">#</span>Instagram
      </h4>
    </div>
  );
};

export default SideBarChannel;

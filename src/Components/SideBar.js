import React from "react";
import "../styles/SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideBar = () => {
  return (
    <div>
      <h1>Heyy SideBar</h1>

      <div className="sidebar__top">
        <h3>Shreyas Discord Clone</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
};

export default SideBar;

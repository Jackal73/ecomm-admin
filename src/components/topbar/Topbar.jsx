import React from "react";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

import shawn from "../../images/shawn-profile.png";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            theRACK
            <span className="small">.admin</span>
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={shawn} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

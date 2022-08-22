import React from "react";

import "./RightSideBar.css";
import SideBarContact from "./SideBarContact";
import SideBarOverview from "./SideBarOverview";

const RightSideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContact">
        <SideBarContact />
      </div>
      <div className="sideBarOverviewBlock">
        <SideBarOverview />
      </div>
    </div>
  );
};

export default RightSideBar;

import React from "react";

import "./Header.css";
import HeaderContentBlock from "./HeaderContentBlock";
import MobileHeader from "../MobileHeader";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <div className="root-header">
      <div className="header  container-xl">
        <div className="row gy-3 gx-3 align-items-center ">
          <HeaderLogo />
          <HeaderContentBlock desktopClassName="header-content-block-desktop" />
          <MobileHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import HeaderSearch from "./HeaderSearch";
import ButtonLightBlue from "../../UI/Buttons/ButtonLightBlue";
import ButtonBlueImg from "../../UI/Buttons/ButtonBlueImg";
import plusCircle from "../../../access/icons/PlusCircle.svg";

const HeaderContentBlock = ({ desktopClassName }) => {
  return (
    <>
      <HeaderSearch desktopClassName={desktopClassName} />
      <div
        className={`col-xs-12 col-sm-12 col-xl-4 header-content-block ${desktopClassName}`}
      >
        <div className="header__buttons">
          <div className="header-buttons__signIn">
            <ButtonLightBlue name={"SignIn"} />
          </div>
          <div className="header-buttons__postAds">
            <ButtonBlueImg buttonImg={plusCircle} name={"Post Ads"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContentBlock;

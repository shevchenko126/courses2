import RecursiveMenu from "../../../UI/RecursiveMenu";
import HeaderNavigateCategory from "../../HeaderNavigate/HeaderNavigateCategory";
import { useState } from "react";
import HeaderContentBlock from "../HeaderContentBlock";

const MobileHeader = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="col-6 mobileHeader">
      <div
        className={isActive ? "burger_active" : "burger"}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="burger__line burger__line_first" />
        <span className="burger__line burger__line_second" />
        <span className="burger__line burger__line_third" />
        <span className="burger__line burger__line_fourth" />
      </div>
      <div
        className={isActive ? "mobile-header-block" : "header-block__closed"}
      >
        <HeaderContentBlock desktopClassName={"desktopClassName"} />
        <RecursiveMenu />
        <HeaderNavigateCategory />
      </div>
    </div>
  );
};

export default MobileHeader;

import HeaderLogo from "./HeaderLogo";
import HeaderContentBlock from "./HeaderContentBlock";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div>
      <div className="root-header">
        <div className="header  container-xl">
          <div className="row gy-3 gx-3 align-items-center ">
            <HeaderLogo />
            <HeaderContentBlock desktopClassName="header-content-block-desktop" />
            <MobileHeader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

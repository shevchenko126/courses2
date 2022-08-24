import HeaderSearch from "./HeaderSearch";
import ButtonPostAds from "../../../UI/ButtonPostAds";
import ButtonSignIn from "../../../UI/ButtonSignIn";

const HeaderContentBlock = ({
  desktopClassName,
}: {
  desktopClassName: string;
}) => {
  return (
    <>
      <HeaderSearch desktopClassName={desktopClassName} />
      <div
        className={`col-xs-12 col-sm-12 col-xl-4 header-content-block ${desktopClassName}`}
      >
        <div className="header__buttons">
          <ButtonSignIn />
          <ButtonPostAds />
        </div>
      </div>
    </>
  );
};

export default HeaderContentBlock;

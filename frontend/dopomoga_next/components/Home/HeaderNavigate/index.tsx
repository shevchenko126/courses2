import RecursiveMenu from "../../UI/RecursiveMenu";
import HeaderNavigateCategory from "./HeaderNavigateCategory";

const HeaderNavigate = ({ desktopClassName }: { desktopClassName: string }) => {
  return (
    <div className={`root-headerNavigate ${desktopClassName}`}>
      <div className="headerNavigate container-xl">
        <div className="row align-items-center headerNavigate__content ">
          <div className="col-xs-12 col-sm-12 col-xl-2 headerNavigate__dropdown">
            <RecursiveMenu />
          </div>
          <div className="col-xs-12 col-sm-12 col-xl-10 ">
            <HeaderNavigateCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigate;

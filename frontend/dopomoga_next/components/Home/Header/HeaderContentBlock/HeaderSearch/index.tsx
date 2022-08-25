const search_icon = "/images/icons/fi_search.svg";
const HeaderSearch = ({ desktopClassName }: { desktopClassName: string }) => {
  return (
    <div
      className={`col-xs-12 col-sm-6 col-xl-4 header-content-block ${desktopClassName}`}
    >
      <div className="header__search ">
        <img className="header-search__img" src={search_icon} alt="search" />
        <input
          className="header-search__input"
          placeholder={"Ads tittle, keyword..."}
        />
      </div>
    </div>
  );
};

export default HeaderSearch;

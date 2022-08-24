import React from "react";

const logo = "images/icons/Logo.png";
const HeaderLogo = () => {
  return (
    <div className="col-6 col-sm-6 col-xl-4  ">
      <div className=" header__logo">
        <img className="header-logo__img" src={logo} alt="logo" />
        <h1 className="header-logo__title">Onest</h1>
      </div>
    </div>
  );
};

export default HeaderLogo;

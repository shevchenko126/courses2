import React from "react";
import "./ButtonRedImg.css";

const ButtonRedImg = ({ buttonImg, name }) => {
  return (
    <>
      <button className="buttonRedImg">
        <img className="buttonRedImg__img" src={buttonImg} alt="icon" />
        {name}
      </button>
    </>
  );
};

export default ButtonRedImg;

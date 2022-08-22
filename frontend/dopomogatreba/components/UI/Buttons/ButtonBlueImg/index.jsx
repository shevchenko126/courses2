import React from "react";
import "./ButtonBlueImg.css";

const ButtonBlueImg = ({ buttonImg, name }) => {
  return (
    <>
      <button className="buttonBlueImg">
        <img className="buttonBlueImg__img" src={buttonImg} alt="plusCircle" />
        {name}
      </button>
    </>
  );
};

export default ButtonBlueImg;

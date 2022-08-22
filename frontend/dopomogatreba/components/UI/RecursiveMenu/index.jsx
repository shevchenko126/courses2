import React, { useState } from "react";

import { topCategory } from "../../TopCategory";
import "./RecursMenu.css";
import arrowDown from "../../../access/icons/CaretDown.svg";
import arrowRight from "../../../access/icons/CaretRight.svg";

const RecursiveMenu = () => {
  const category = topCategory;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubCategory, setIsOpenSubCategory] = useState();

  return (
    <div className="recursiveMenu">
      <div
        className="recursiveMenu__topBlock"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsOpenSubCategory(null);
        }}
      >
        <div className="recursiveMenu__btn">All Category</div>
        <img src={arrowDown} alt="arrowDown" />
      </div>

      <ul className={isOpen ? "recursiveMenu__contentBlock" : "closed"}>
        {category.map((item, index) => (
          <li
            key={index}
            className="recursiveMenu-contentBlock__content"
            onClick={() => {
              setIsOpenSubCategory((currentValue) =>
                currentValue === index ? null : index
              );
            }}
          >
            <div className="recursiveMenu-contentBlock-content__category">
              <div className="recursiveMenu-contentBlock-content__category__items">
                <img
                  className="recursiveMenu-contentBlock-content-category-icon"
                  src={item.img}
                  alt="icon"
                  height={24}
                />
                <div className="recursiveMenu-contentBlock-content-category-title">
                  {item.name}
                </div>
              </div>
              <div className="recursiveMenu-contentBlock-content__arrow">
                <img src={arrowRight} alt="arrowRight" />
              </div>
            </div>
            <ul
              className={
                isOpenSubCategory === index
                  ? "recursiveMenu-contentBlock-subMenu"
                  : "closed"
              }
            >
              {item.links.map((link, i) => (
                <li
                  key={i}
                  className="recursiveMenu-contentBlock-subMenu__link"
                >
                  <a href="/#">{link.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecursiveMenu;

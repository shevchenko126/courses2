import React, { useState } from "react";

const arrowDown_icon = "/images/icons/CaretDown.svg";
const arrowRight_icon = "/images/icons/CaretRight.svg";
const category = [
  {
    id: 1,
    name: "Electronic",
    items: "(69,114)",
    img: "/images/icons/DeviceMobileSpeaker.svg",
    links: [
      {
        title: "Laptops, Desktop Computers, Tablets",
      },
      {
        title: " TVs",
      },
      {
        title: "Cameras, Camcorders & Accessories",
      },
      {
        title: "Other Electronics",
      },
      {
        title: "View All",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile Phone",
    items: "(62,099)",
    img: "/images/icons/DeviceMobileSpeaker.svg",
    links: [
      {
        title: "Mobile Phone",
      },
      {
        title: "Mobile Phone Accessories\n",
      },
      {
        title: "SIM Cards",
      },
      {
        title: "Mobile Phone Services",
      },
      {
        title: "View All",
      },
    ],
  },
  {
    id: 3,
    name: "Vehicles",
    items: "(69,114)",
    img: "/images/icons/DeviceMobileSpeaker.svg",
    links: [
      {
        title: "Car",
      },
      {
        title: "Motorbikes & Bicycles",
      },
      {
        title: "Three Wheelers",
      },
      {
        title: "Trucks",
      },
      {
        title: "View All",
      },
    ],
  },
  {
    id: 4,
    name: "Property",
    items: "(69,114)",
    img: "/images/icons/DeviceMobileSpeaker.svg",
    links: [
      {
        title: "Apartments for Salse",
      },
      {
        title: "New Developments",
      },
      {
        title: "Commercial Properties for Sale",
      },
      {
        title: "Property Tools & Services",
      },
      {
        title: "View All",
      },
    ],
  },
  {
    id: 5,
    name: "Home & Living",
    items: "(62,099)",
    img: "/images/icons/DeviceMobileSpeaker.svg",
    links: [
      {
        title: "Living Room Furniture",
      },
      {
        title: "Kitchen & Dining Furniture",
      },
      {
        title: "Bedroom Furniture",
      },
      {
        title: "Office & Shop Furniture",
      },
      {
        title: "View All",
      },
    ],
  },
  {
    id: 6,
    name: "Fashion & Beauty",
    items: "(3,870)",
    img: "/images/icons/DeviceMobileSpeaker.svg",
    links: [
      {
        title: "Clothing & Accessories",
      },
      {
        title: "Jewellery",
      },
      {
        title: "Watches",
      },
      {
        title: "Bags",
      },
      {
        title: "View All",
      },
    ],
  },
];
const RecursiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubCategory, setIsOpenSubCategory] = useState<
    number | undefined
  >();

  return (
    <div className="recursiveMenu">
      <div
        className="recursiveMenu__topBlock"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsOpenSubCategory(undefined);
        }}
      >
        <div className="recursiveMenu__btn">All Category</div>
        <img src={arrowDown_icon} alt="arrowDown" />
      </div>

      <ul className={isOpen ? "recursiveMenu__contentBlock" : "closed"}>
        {category.map((item, index) => (
          <li
            key={index}
            className="recursiveMenu-contentBlock__content"
            onClick={() => {
              setIsOpenSubCategory((currentValue) =>
                currentValue === index ? undefined : index
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
                <img src={arrowRight_icon} alt="arrowRight" />
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

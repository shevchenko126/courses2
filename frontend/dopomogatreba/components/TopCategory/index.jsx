import React from "react";

import "./TopCategory.css";
import { ReactComponent as MobilImg } from "../../access/icons/DeviceMobileSpeaker.svg";
import mobilImg from "../../access/icons/DeviceMobileSpeaker.svg";
import { ReactComponent as ArrowRight } from "../../access/icons/CaretRight.svg";

export const topCategory = [
  {
    id: 1,
    name: "Electronic",
    items: "(69,114)",
    img: mobilImg,
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
    img: mobilImg,
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
    img: mobilImg,
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
    img: mobilImg,
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
    img: mobilImg,
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
    img: mobilImg,
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

const TopCategory = () => {
  return (
    <div className="container-xl">
      <div className="top-category">
        <h2 className="top-category__title">TopCategory</h2>
      </div>
      <div className="row gy-3 gx-3  top-category__cards">
        {topCategory.map((cart) => (
          <div key={cart.id} className="col-xs-12 col-sm-6 col-xl-4 ">
            <div className="top-category__card">
              <div className="top-category-card__info">
                <div className="top-category-card-info__blockTitle">
                  <div className="top-category-card-info-blockTitle__title">
                    {cart.name}
                  </div>
                  <div className="top-category-card-info-blockTitle__items">
                    {cart.items}
                  </div>
                </div>
                <div className="top-category-card-info-blockTitle__img">
                  <MobilImg />
                </div>
              </div>
              <div className="top-category-card__links">
                {cart.links.map((link, i) => (
                  <div key={i} className="top-category-card-links__category">
                    <div className="top-category-card-links-category-link__img">
                      <ArrowRight />
                    </div>
                    <a
                      className="top-category-card-links-category__link"
                      href="/#"
                    >
                      {link.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;

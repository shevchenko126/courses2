
// import { ReactComponent as MobilImg } from "/public/images/icons/DeviceMobileSpeaker.svg";
import mobilImg from "/public/images/icons/DeviceMobileSpeaker.svg";

// import { ReactComponent as ArrowRight } from "../../../public/images/icons/CaretRight.svg";

interface TopCategoryProps {
    id: number,
    name: string,
    items: string,
    img: string,
    links:{
        id:number,
        title:string
    }[]
}

export const topCategory:TopCategoryProps[] = [
  {
    id: 1,
    name: "Electronic",
    items: "(69,114)",
    img: mobilImg,
    links: [
      {
        id:1,
        title: "Laptops, Desktop Computers, Tablets",
      },
      {
        id:2,
        title: " TVs",
      },
      {
        id:3,
        title: "Cameras, Camcorders & Accessories",
      },
      {
        id:4,
        title: "Other Electronics",
      },
      {
        id:5,
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
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27 30.375V5.625C27 4.38236 25.9926 3.375 24.75 3.375L11.25 3.375C10.0074 3.375 9 4.38236 9 5.625V30.375C9 31.6176 10.0074 32.625 11.25 32.625H24.75C25.9926 32.625 27 31.6176 27 30.375Z"
                      stroke="#00AAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 7.875H22.5"
                      stroke="#00AAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="top-category-card__links">
                {cart.links.map((link, i) => (
                  <div key={i} className="top-category-card-links__category">
                    <div className="top-category-card-links-category-link__img">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 3.75L13.75 10L7.5 16.25"
                          stroke="#66CCFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

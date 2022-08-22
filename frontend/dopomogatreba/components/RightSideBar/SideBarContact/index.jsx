import React from "react";

import likeIcon from "../../../access/icons/LikeIconButton.svg";
import phoneIcon from "../../../access/icons/PhoneCall.svg";
import chatCircleIcon from "../../../access/icons/ChatCircleDots.svg";
import avatarImage from "../../../access/icons/AvatarImages.svg";
import emailIcon from "../../../access/icons/mailIcon.svg";
import mapPinIcon from "../../../access/icons/MapPinLine.svg";
import globeEastIcon from "../../../access/icons/GlobeEastIcon.svg";
import mapImage from "../../../access/icons/MapImage.png";

const SideBarContact = () => {
  return (
    <>
      <div className="sideBarContact__priceBlock">
        <div className="sideBarContact-priceBlock__price">
          <span>$80,499</span>
        </div>
        <div className="sideBarContact-priceBlock__like">
          <img src={likeIcon} alt="likeIcon" />
        </div>
      </div>
      <div className="sideBarContact__phoneBlock">
        <div className="sideBarContact-phoneBlock__phoneNumber">
          <div className="sideBarContact-phoneBlock-phoneNumber__number">
            <img src={phoneIcon} alt="phoneIcon" />
            <span>(808) 5XX-XXXX</span>
          </div>
          <span>Click here to reveal phone number.</span>
        </div>
        <div className="sideBarContact-phoneBlock__button">
          <button>
            <img src={chatCircleIcon} alt="chatCircleIcon" /> Send Message
          </button>
        </div>
      </div>
      <div className="sideBarContact__sellerBlock">
        <div className="sideBarContact-sellerBlock__seller">
          <div className="sideBarContact-sellerBlock-seller__avatar">
            <img src={avatarImage} alt="avatar" />
          </div>
          <div className="sideBarContact-sellerBlock-seller__info">
            <div className="sideBarContact-sellerBlock-seller-info__addBy">
              <span>Add by:</span>
            </div>
            <div className="sideBarContact-sellerBlock-seller-info__name">
              <span>Kevin Gilbert</span>
            </div>
          </div>
        </div>
        <div className="sideBarContact-sellerBlock__infoBlock">
          <div className="sideBarContact-sellerBlock-infoBlock__email">
            <img src={emailIcon} alt="emailIcon" />
            <span>kevin.gilbert@gmail.com</span>
          </div>
          <div className="sideBarContact-sellerBlock-infoBlock__address">
            <img src={mapPinIcon} alt="mapPinIcon" />
            <span>4517 New York. Manchester, Kentucky 394</span>
          </div>
          <div className="sideBarContact-sellerBlock-infoBlock__site">
            <img src={globeEastIcon} alt="globeEastIcon" />
            <span>www.kevin.com</span>
          </div>
        </div>
      </div>
      <div className="sideBarContact__locationBlock">
        <div className="sideBarContact-locationBlock__title">
          <span>Ads Location</span>
        </div>
        <div className="sideBarContact-locationBlock__map">
          <img src={mapImage} alt="mapImage" />
          <div className="sideBarContact-locationBlock-map__img">
            <img src={mapPinIcon} alt="mapPinIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarContact;

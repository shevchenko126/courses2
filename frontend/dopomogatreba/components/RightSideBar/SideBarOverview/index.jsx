import React from "react";

import warningIcon from "../../../access/icons/WarningIcon.svg";
import shareIcon from "../../../access/icons/ShareNetwork.svg";
import { SocialNetworkSVGSelector } from "../../../access/icons/SocialNetworkSVGSelector";

const informationList = [
  { name: "Conditions:", info: "Used" },
  { name: "Brand:", info: "Vivo" },
  { name: "Model:", info: "V2066" },
  { name: "Model Year:", info: "2021" },
  { name: "Authenticity:", info: "Original" },
];
const SideBarOverview = () => {
  return (
    <div className="sideBarOverview">
      <div className="sideBarOverview__title">
        <span>Overview</span>
      </div>
      <div className="sideBarOverview__bottomLine">
        <div className="sideBarOverview__infoBlock">
          {informationList.map((info, index) => (
            <div key={index} className="sideBarOverview-infoBlock__info">
              <div className="sideBarOverview-infoBlock-info__name">
                <span>{info.name}</span>
              </div>
              <div className="sideBarOverview-infoBlock-info__info">
                <span>{info.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sideBarOverview__warning__bottomLine">
        <div className="sideBarOverview__warning">
          <div className="sideBarOverview-warning__icon">
            <img src={warningIcon} alt="warningIcon" />
          </div>
          <div className="sideBarOverview-warning__title">
            <span>Report Abuse</span>
          </div>
        </div>
      </div>
      <div className="sideBarOverview__shareAds">
        <div className="sideBarOverview-shareAds__title">
          <div className="sideBarOverview-shareAds-title__icon">
            <img src={shareIcon} alt="shareIcon" />
          </div>
          <div className="sideBarOverview-shareAds-title__title">
            <span>Share Ads</span>
          </div>
        </div>
        <div className="sideBarOverview-shareAds__icons">
          <div className="sideBarOverview-shareAds-icons__icon">
            <SocialNetworkSVGSelector id={"watsApp"} />
          </div>

          <div className="sideBarOverview-shareAds-icons__icon">
            <SocialNetworkSVGSelector id={"facebook"} />
          </div>

          <div className="sideBarOverview-shareAds-icons__icon">
            <SocialNetworkSVGSelector id={"twitter"} />
          </div>

          <div className="sideBarOverview-shareAds-icons__icon">
            <SocialNetworkSVGSelector id={"linkedin"} />
          </div>

          <div className="sideBarOverview-shareAds-icons__icon">
            <SocialNetworkSVGSelector id={"pinterest"} />
          </div>
          <div className="sideBarOverview-shareAds-icons__icon">
            <SocialNetworkSVGSelector id={"linkCopy"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarOverview;

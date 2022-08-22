import React from "react";
import phoneCell from "../../../access/icons/PhoneCall.svg";
import mail from "../../../access/icons/mailIcon.svg";
import mapPin from "../../../access/icons/MapPinLine.svg";

const ContactInfo = () => {
  return (
    <div className=" contact__contactInfo">
      <div className="contact-contactInfo__title">
        <h2>Contact Info</h2>
      </div>
      <div className="contact-contactInfo__infoBlock">
        <div className="contact-contactInfo__phone">
          <img src={phoneCell} alt="phoneCell" />
          <div className="contact-contactInfo-phone__number">
            (406) 555-0120
          </div>
        </div>
        <div className="contact-contactInfo__email">
          <img src={mail} alt="mail" />
          <div className="contact-contactInfo-email__mail">
            Support@Adlisting.com Career@Adlisting.com
          </div>
        </div>
        <div className="contact-contactInfo__address">
          <img src={mapPin} alt="mapPin" />
          <div className="contact-contactInfo-address__address">
            8502 Preston Rd. Inglewood, Maine 98380
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

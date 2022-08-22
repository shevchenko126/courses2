import React from "react";
import "./Contact.css";
import ContactInfo from "./ContactInfo";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <div className="contact container-xxl">
      <div className="row">
        <div className="col-lg-5 left">
          <ContactInfo />
        </div>
        <div className="col-lg-7 ">
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default Contact;

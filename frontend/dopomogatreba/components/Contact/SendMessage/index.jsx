import React from "react";
import ButtonBlue from "../../UI/Buttons/ButtonBlue";

const SendMessage = () => {
  return (
    <div className="contact__sendMessage">
      <div className="contact-sendMessage__title">
        <h2>Send Message</h2>
      </div>
      <form className="row contact__sendMessage__form">
        <div className="col-xl-6  contact__sendMessage-form__name">
          <input type="name" id="name" name="name" placeholder="Full name" />
        </div>
        <div className="col-xl-6 contact__sendMessage-form__mail">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="col-xl-12 contact__sendMessage-form__subjects">
          <input
            type="subjects"
            id="subjects"
            name="subjects"
            placeholder="Subjects"
          />
        </div>
        <div className="col-xl-12 contact__sendMessage-form__message">
          <textarea id="message" name="message" placeholder="Message" />
        </div>
        <div>
          <ButtonBlue name={"Send Message"} />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;

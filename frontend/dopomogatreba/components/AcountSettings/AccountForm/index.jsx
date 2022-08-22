import React from "react";
import ButtonBlue from "../../UI/Buttons/ButtonBlue";

const AccountForm = () => {
  return (
    <form className=" accountSettings-form">
      <div className="row">
        <div className="col-xl-6  accountSettings-form__name">
          <div className="accountSettings-form-name__title">
            <span>Full Name</span>
          </div>
          <input type="name" id="name" name="name" placeholder="full name" />
        </div>
        <div className="col-xl-6  accountSettings-form__phone">
          <div className="accountSettings-form-phone__title">
            <span>Phone Number</span>
          </div>
          <input
            type="phone"
            id="phone"
            name="phone number"
            placeholder="phone number"
          />
        </div>
        <div className="col-xl-6  accountSettings-form__location">
          <div className="accountSettings-form-location__title">
            <span>Location</span>
          </div>
          <input
            type="location"
            id="location"
            name="location"
            placeholder="location"
          />
        </div>
        <div className="col-xl-6  accountSettings-form__websiteLink">
          <div className="accountSettings-form-websiteLink__title">
            <span>Website Link(optional)</span>
          </div>
          <input type="url" id="url" name="url" placeholder="website url" />
        </div>
      </div>
      <div className="accountSettings-form__button">
        <ButtonBlue name={"Save Changes"} />
      </div>
    </form>
  );
};

export default AccountForm;

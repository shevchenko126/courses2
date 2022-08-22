import React from "react";
import ButtonBlue from "../../UI/Buttons/ButtonBlue";

const CurrentPlans = () => {
  return (
    <div className="plans-billing__currentPlans">
      <div className="plans-billing-currentPlans__infoBlock">
        <div className="plans-billing-currentPlans-infoBlock__title">
          <span>Current Plans</span>
        </div>
        <div className="plans-billing-currentPlans-infoBlock__subscriptionName">
          <h2>Standard</h2>
        </div>
        <div className="plans-billing-currentPlans-infoBlock__subscriptionDate">
          <span>
            Standard monthly subscription plan active since: Apr 16, 2021
          </span>
        </div>
      </div>
      <div className="plans-billing-currentPlans__buttonsBlock">
        <div className="plans-billing-currentPlans-buttonsBlock_cancelButton">
          <button>Cancel Plan</button>
        </div>
        <div className="plans-billing-currentPlans-buttonsBlock_upgradeButton">
          <ButtonBlue name={"Upgrade Plan"} />
        </div>
      </div>
    </div>
  );
};

export default CurrentPlans;

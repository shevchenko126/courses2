import React, { useState } from "react";

const plans = [
  "Post 10 Ads per week",
  "Featured ads",
  "Multiple-images & video",
  "Special ads badge",
  "Standard customer support",
  "Adlisting Membership",
];
const CurrentPlansBenefits = () => {
  const [isChecked, setIsChecked] = useState([]);
  return (
    <div className="plans-billing__currentPlansBenefits">
      <div className="plans-billing-currentPlansBenefits__title">
        <span>Current Plans Benefits</span>
      </div>
      <div className="row plans-billing-currentPlansBenefits__plansItems">
        {plans.map((plan, index) => (
          <label
            key={index}
            className="col-6 plans-billing-currentPlansBenefits-plansItems__item"
          >
            <input
              type="checkbox"
              onChange={() => {
                if (isChecked.includes(index)) {
                  isChecked.splice(isChecked.indexOf(index), 1);
                } else {
                  isChecked.push(index);
                }
                setIsChecked([...isChecked]);
              }}
            />
            <svg
              className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="20" height="20" rx="10" fill="#E8F7FF" />
              <path
                d="M14 7L8.5 12.5L6 10"
                strokeWidth="2"
                stroke={isChecked.includes(index) ? "#00AAFF" : "none"} // only show the checkmark when `isCheck` is `true`
              />
            </svg>
            <span className="plans-billing-currentPlansBenefits-plansItems-item__title">
              {plan}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CurrentPlansBenefits;

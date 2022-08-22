import React from "react";
import "./PlansBilling.css";
import CurrentPlans from "./CurrentPlans";
import CurrentPlansBenefits from "./CurrentPlansBenefits";
import NextInvoices from "./NextInvoices";
import PaymentMethod from "./PaymentMethod";
import RecentInvoice from "./RecentInvoice";

const PlansBilling = () => {
  return (
    <div className="plans-billing__wrapper">
      <div className="row gy-3 gx-3">
        <div className="col-12">
          <CurrentPlans />
        </div>
        <div className="col-xs-12 col-sm-6">
          <CurrentPlansBenefits />
        </div>
        <div className="col-xs-12 col-sm-6">
          <NextInvoices />
        </div>
        <div className="col-xs-12 col-sm-4">
          <PaymentMethod />
        </div>
        <div className="col-xs-12 col-sm-8">
          <RecentInvoice />
        </div>
      </div>
    </div>
  );
};

export default PlansBilling;

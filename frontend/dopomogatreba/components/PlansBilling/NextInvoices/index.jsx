import React from "react";
import logo from "../../../access/icons/Frame 293.svg";

const NextInvoices = () => {
  return (
    <div className="plans-billing__nextInvoices">
      <div className="plans-billing-nextInvoices__topBlock">
        <div className="plans-billing-nextInvoices-topBlock__titlePrice">
          <p className="plans-billing-nextInvoices-topBlock-titlePrice__title">
            Next Invoices
          </p>
          <p className="plans-billing-nextInvoices-topBlock-titlePrice__price">
            $20.00
          </p>
        </div>
        <div className="plans-billing-nextInvoices-topBlock__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="plans-billing-nextInvoices__infoBlock">
        <div className="row plans-billing-nextInvoices-infoBlock__planType">
          <div className="col-4 plans-billing-nextInvoices-infoBlock-planType__title">
            Plan Type:
          </div>
          <div className="col-8 plans-billing-nextInvoices-infoBlock-planType__info">
            Standard (monthly)
          </div>
        </div>
        <div className="row plans-billing-nextInvoices-infoBlock__nextInvoice">
          <div className="col-4 plans-billing-nextInvoices-infoBlock-nextInvoice__title">
            Next Invoice:
          </div>
          <div className="col-8 plans-billing-nextInvoices-infoBlock-nextInvoice__info">
            Aug 16, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextInvoices;

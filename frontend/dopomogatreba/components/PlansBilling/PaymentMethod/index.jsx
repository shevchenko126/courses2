import React from "react";
import visaIcon from "../../../access/icons/Visa.svg";
import trash from "../../../access/icons/Trash.svg";

const PaymentMethod = () => {
  return (
    <div className="plans-billing__paymentMethod">
      <div className="plans-billing-paymentMethod__title">Payment Method</div>
      <div className="plans-billing-paymentMethod__cardBlock">
        <div className="plans-billing-paymentMethod-cardBlock__card">
          <img
            className="plans-billing-paymentMethod-cardBlock-card__type"
            src={visaIcon}
            alt="visaLogo"
          />
          <div className="plans-billing-paymentMethod-cardBlock-card__number">
            **** 6521
          </div>
        </div>
        <div className="plans-billing-paymentMethod__infoBlock">
          <div className="row plans-billing-paymentMethod-infoBlock__nameCard">
            <div className="col-6 plans-billing-paymentMethod-infoBlock-nameCard__title">
              Name on Card:
            </div>
            <div className="col-6 plans-billing-paymentMethod-infoBlock-nameCard__name">
              Jenny Wilson
            </div>
          </div>
          <div className="row plans-billing-paymentMethod-infoBlock__dateCard">
            <div className="col-6 plans-billing-paymentMethod-infoBlock-dateCard__title">
              Expiration date:
            </div>
            <div className="col-6 plans-billing-paymentMethod-infoBlock-dateCard__date">
              8/21
            </div>
          </div>
        </div>
      </div>
      <div className="plans-billing__paymentMethod__buttonsBlock">
        <div className="plans-billing__paymentMethod-buttonsBlock__changeCard">
          <button>Change Card</button>
        </div>
        <button className="plans-billing__paymentMethod-buttonsBlock__delete">
          <img src={trash} alt="trash" />
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;

import React from "react";

const recentData = [
  {
    id: 1,
    date: "Jul 16, 2021 at 11:34 PM",
    type: "Standard subcription (monthly)",
    amount: "$20.00",
  },
  {
    id: 2,
    date: "Jun 16, 2021 at 05:19 PM",
    type: "Standard subcription (monthly)",
    amount: "$20.00",
  },
  {
    id: 3,
    date: "May 16, 2021 at 01:57 AM",
    type: "Standard subcription (monthly)",
    amount: "$20.00",
  },
  {
    id: 4,
    date: "Apr 16, 2021 at 09:01 PM",
    type: "Standard subcription (monthly)",
    amount: "$20.00",
  },
];
const RecentInvoice = () => {
  return (
    <div className="plans-billing__recentInvoice">
      <div className="plans-billing-recentInvoice__title">Recent Invoice</div>
      <div className="row plans-billing-recentInvoice__infoBlock">
        <div className="row plans-billing-recentInvoice-infoBlock__header">
          <div className="col-5 plans-billing-recentInvoice-infoBlock-header__date">
            Date
          </div>
          <div className="col-5 plans-billing-recentInvoice-infoBlock-header__type">
            Payment type
          </div>
          <div className="col-2 plans-billing-recentInvoice-infoBlock-header__amount">
            Amount
          </div>
        </div>
        {recentData.map((item, index) => (
          <div
            key={index}
            className="row plans-billing-recentInvoice-infoBlock__data"
          >
            <div className="col-5 plans-billing-recentInvoice-infoBlock-data__date">
              {item.date}
            </div>
            <div className="col-5 plans-billing-recentInvoice-infoBlock-data__type">
              {item.type}
            </div>
            <div className="col-2  plans-billing-recentInvoice-infoBlock-data__amount">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoice;

import React from "react";
import "./AccountSettings.css";

import AccountInfo from "./AccountInfo";
import AccountForm from "./AccountForm";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const AccountSettings = () => {
  return (
    <div className="accountSettings container-xl">
      <div className="accountSettings__title">
        <h4>Account Settings</h4>
      </div>
      <div className="accountSettings__accountInfo">
        <AccountInfo />
      </div>
      <div className="accountSettings__form">
        <AccountForm />
      </div>
      <div className="accountSettings__changePassword">
        <ChangePassword />
      </div>
      <div className="accountSettings__deleteAccount">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default AccountSettings;

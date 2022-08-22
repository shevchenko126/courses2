import React from "react";
import avatar from "../../../access/icons/AvatarExample.jpeg";
import ButtonLightBlue from "../../UI/Buttons/ButtonLightBlue";

const AccountInfo = () => {
  return (
    <div className="row justify-content-start accountSettings-accountInfo">
      <div className="col-6 accountSettings-accountInfo__avatar">
        <div className="accountSettings-accountInfo-avatar__avatar">
          <img src={avatar} alt="avatar" />
          <ButtonLightBlue name={"Choose image"} />
        </div>
      </div>
      <div className="col-6 justify-content-end  accountSettings-accountInfo__email">
        <div className="accountSettings-accountInfo-email__title">
          <span>Email:</span>
        </div>
        <div className="accountSettings-accountInfo-email__mail">
          <span>jenny.wilson@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

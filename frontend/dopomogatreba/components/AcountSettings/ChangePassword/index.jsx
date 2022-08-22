import React, { useState } from "react";

import eye from "../../../access/icons/fi_eye.svg";
import ButtonBlue from "../../UI/Buttons/ButtonBlue";

const titleInput = ["Current Password", "New Password", "Confirm Password"];

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState([]);

  const onClockShowPassword = (index) => {
    if (showPassword.includes(index)) {
      showPassword.splice(showPassword.indexOf(index), 1);
    } else {
      showPassword.push(index);
    }
    setShowPassword([...showPassword]);
  };
  return (
    <div className="accountSettings-changePassword">
      <div className="accountSettings-changePassword__title">
        <h4>Change Password</h4>
      </div>
      <form className="row accountSettings-changePassword__inputBlock">
        {titleInput.map((title, index) => (
          <div
            className="col-xl-4 accountSettings-changePassword-inputBlock__password"
            key={index}
          >
            <div className="accountSettings-changePassword-inputBlock-password__title">
              <span>{title}</span>
            </div>
            <input
              type={showPassword.includes(index) ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <img
              src={eye}
              alt="eye"
              onClick={() => {
                onClockShowPassword(index);
              }}
            />
          </div>
        ))}
        <div className="accountSettings-changePassword-inputBlock__button">
          <ButtonBlue name={"Save Changes"} />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

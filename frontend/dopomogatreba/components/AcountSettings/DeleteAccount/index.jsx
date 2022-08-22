import React from "react";
import ButtonRedImg from "../../UI/Buttons/ButtonRedImg";
import iconTrash from "../../../access/icons/ButtonTrash.svg";

const DeleteAccount = () => {
  return (
    <>
      <div className="accountSettings-deleteAccount__title">
        <h4>Delete Account</h4>
      </div>
      <div className="accountSettings-deleteAccount__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aperiam
          atque consectetur consequatur dicta dolorem eveniet hic illo iste
          minima modi omnis, perferendis possimus praesentium quam quas quidem
          quos saepe sed similique temporibus unde velit vitae voluptatem!
          Consequatur dolores eos expedita explicabo fuga illo quae quaerat
          sapiente sed vero!
        </p>
      </div>
      <div className="accountSettings-deleteAccount__button">
        <ButtonRedImg name={"Delete Account"} buttonImg={iconTrash} />
      </div>
    </>
  );
};

export default DeleteAccount;

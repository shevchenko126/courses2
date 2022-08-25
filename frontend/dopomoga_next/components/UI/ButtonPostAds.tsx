const plusCircle_icon = "/images/icons/PlusCircle.svg";

const ButtonPostAds = () => {
  return (
    <div className="header-buttons__postAds">
      <img
        className="header-buttons-postAds__img"
        src={plusCircle_icon}
        alt="plusCircle"
      />
      <button className="header-buttons-postAds__button">Post Ads</button>
    </div>
  );
};

export default ButtonPostAds;

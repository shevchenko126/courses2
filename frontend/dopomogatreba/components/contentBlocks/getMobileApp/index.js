import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import image from "./images/phone.png";
import image_shadow from "./images/phone-shadow.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <div className="row get-app">
      <div className="col-md-6 get-app__column_image">
        <img src={image} alt="Mobile phone" className="get-app__image" />

        <img
          src={image_shadow}
          alt="Mobile phone"
          className="get-app__image-shadow"
        />
      </div>
      <div className="col-md-6 get-app__column_text">
        <div className="get-app__title">Download our mobile app</div>
        <div className="get-app__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          autem, alias eius incidunt commodi expedita nam reiciendis Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum
        </div>
        <div className="button-area">
          <a href="#">
            <div className="button google">
              <div className="button__caption">Get it now</div>
              <div className="button__app-market">Google Play</div>
            </div>
          </a>
          <a href="#">
            <div className="button apple">
              <div className="button__caption">Get it now</div>
              <div className="button__app-market">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

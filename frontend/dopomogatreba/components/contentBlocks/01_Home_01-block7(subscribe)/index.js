import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const Subscription = () => {
  return (
    <div class="container-fluid subscription">
      <div class="row">
        <div class=" col-sm-12 col-xl-6 p-0">
          <section class="subscription__left">
            <div class="subscription__left_middle d-flex-column align-items-center justify-content-start flex-dir-column">
              <h2 class="subscription__head">Subscribe to our newsletter</h2>
              <p class="subscription__text">
                Vestibulum consectetur placerat tellus. Sed faucibus fermentum
                purus, at facilisis.
              </p>
            </div>
          </section>
        </div>

        <div class=" col-sm-12 col-xl-6 p-0">
          <section class="subscription__right">
            <form
              class="subscription__right_middle d-flex align-items-center justify-content-start"
              method="get"
              action="#"
            >
              <input
                class="subscription__input"
                type="email"
                placeholder="Email address"
                name="email"
              />

              <button class="subscription__button">
                <div class="subscription__button-text">Subscribe</div>
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Subscription;

import React from "react";

const FooterSubscription = () => {
  return (
    <div className="container-fluid subscription">
      <div className="row align-items-center ">
        <div className=" col-sm-12 col-xl-6 p-0">
          <section className="subscription__left">
            <div className="subscription__left_middle d-flex-column align-items-center justify-content-start flex-dir-column">
              <h2 className="subscription__head">
                Subscribe to our newsletter
              </h2>
              <p className="subscription__text">
                Vestibulum consectetur placerat tellus. Sed faucibus fermentum
                purus, at facilisis.
              </p>
            </div>
          </section>
        </div>

        <div className=" col-sm-12 col-xl-6 p-0">
          <section className="subscription__right">
            <form
              className="subscription__right_middle d-flex align-items-center justify-content-start"
              method="get"
              action="#"
            >
              <input
                className="subscription__input"
                type="email"
                placeholder="Email address"
                name="email"
              />

              <button className="subscription__button">
                <div className="subscription__button-text">Subscribe</div>
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscription;

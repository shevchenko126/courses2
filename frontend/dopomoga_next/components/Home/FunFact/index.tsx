import React from "react";

const FunFact = () => {
  return (
    <div>
      <section id="counter" className="counter">
        <div className="main_counter_area">
          <div className="overlay p-y-3">
            <div className="container">
              <div className="main_counter_content">
                <div className="row">
                  <div className="col-md-3">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-package m-b-1">
                        <img src="/images/icons/package.svg" />
                      </i>
                      <h2 className="statistic-counter">95,0K+</h2>
                      <p></p>
                      <p>Pulished Ads</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-users m-b-1">
                        <img src="/images/icons/users.svg" />
                      </i>
                      <h2 className="statistic-counter">361K+</h2>
                      <p></p>
                      <p>Verified User</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-handshake m-b-1">
                        <img src="/images/icons/handshake.svg" />
                      </i>
                      <h2 className="statistic-counter">67K+</h2>
                      <p></p>
                      <p>Pro Members</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single_counter p-y-2 m-t-1">
                      <i className="fa fa-mappinline m-b-1">
                        <img src="/images/icons/mappinline.svg" />
                      </i>
                      <h2 className="statistic-counter">150+</h2>
                      <p></p>
                      <p>City Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunFact;

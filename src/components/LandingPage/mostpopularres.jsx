import React from "react";
import popularImg from "../../assets/images/popular.png";
import airports from "../../list-airport";

function MostPopularRes() {
  return (
    <div>
      <div id="most-popular" className="most-popular d-xxl-none d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block">
        <div className="container mt-3">
          <div className="row justify-content-center">
            <p className="text-title-blue text-center">
              TOP 3 FEATURED AIRPORT
            </p>
            <h2 className="text-title-black text-center">
              Most Popular Destinations
            </h2>
            <p className="text-title-gray text-center">
              The best destination in our opinion is how much customers like it
              in terms of place, price, comfort and of course airport service
            </p>
          </div>
          <div className="row">
            {airports.map((airport, index) => {
              return (
                <div
                  key={index}
                  className="most-popular-item col-md-auto mt-3"
                  id="most-popular-item-active"
                >
                  <img
                    src={popularImg}
                    alt={airport.image}
                    className="w-100 h-100"
                  />
                  <div className="most-popular-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="">
                            <p className="most-popular-card-star">
                              5.0
                              <span className="most-popular-card-total">
                                (5.2K+)
                              </span>
                            </p>
                            <h3 className="most-popular-card-title">
                              {airport.name}
                            </h3>
                            <p className="most-popular-card-location d-flex">
                              {`${airport.city}, ${airport.country}`}
                            </p>
                          </div>
                          <a href="/#" className="btn btn-cream rounded-4">
                            &gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <a href="/#" className="btn btn-view d-flex justify-content-center mt-3">
            View All Destination
          </a>
        </div>
      </div>
    </div>
  );
}

export default MostPopularRes;

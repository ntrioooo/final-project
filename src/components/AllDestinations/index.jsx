import React, { useEffect } from "react";
import NavBar from "../LandingPage/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import { Link } from "react-router-dom";

function AllDestinations() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  return (
    <div className="container">
      <NavBar />
      <div className="container top">
        <h1 className="text-center mt-2 mb-5">All Destination</h1>
        <div className="row">
          {getListAirlinesResult ? (
            getListAirlinesResult.map((airline) => {
              return (
                <div className="col-md-4" key={airline.id}>
                  <div className="card mb-3">
                    <img
                      src="images/Destination.png"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h4>{airline.originAirport}</h4>
                      <p>{airline.desc}</p>
                      {/* <NavLink to={"/alldst/" + airline.id}>
                        <button
                          type="submit"
                          className="btn btn-dark"
                          style={{ width: "250px", marginRight: "20px" }}
                        >
                          View Detail
                        </button>
                      </NavLink> */}
                      <Link
                        to={"/detail-destination/" + airline.id}
                        class="btn btn-dark"
                        style={{ width: "250px", marginRight: "15px" }}
                      >
                        View Detail
                      </Link>
                      <a href="#" id="wishlist">
                          <img src="images/hati.png" alt="" />
                        </a>
                      {/* error path gambar */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : getListAirlinesLoading ? (
            <h1>Loading</h1>
          ) : (
            <h1>
              {getListAirlinesError ? getListAirlinesError : "Data Kosong"}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllDestinations;

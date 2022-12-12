import React, { useEffect } from "react";
import NavBar from "../LandingPage/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";

function DeatailDestinations() {
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
        <h1 className="text-center mt-2 mb-5">Detail Destination</h1>
        <div className="row">
          {getListAirlinesResult ? (
            getListAirlinesResult.map((airline) => {
              return (
                <div className="col-md-4">
                  <div className="card mb-3">
                    <img
                      src="images/Destination.png"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h4>{airline.originAirport}</h4>
                      <p>{airline.desc}</p>
                      <button
                        type="submit"
                        className="btn btn-dark"
                        style={{ width: "250px", marginRight: "20px" }}
                      >
                        View Detail
                      </button>

                      <a href="/#">
                        <img src="images/hati.png" alt="" />
                      </a>
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
          {/* <div className="col-md">
                        <img src="images/Destination.png" className="card-img-top" alt=''/>
                    </div>
                    <div className="col-md px-5 py-5">
                        <h2 className='mb-5'>BANDARA SOEKARNO HATTA</h2>
                        <p className='mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta harum facilis sapiente nesciunt sint pariatur, illo mollitia ea fuga voluptatibus itaque, doloribus velit dolor dicta eaque ipsam cupiditate accusantium?
                        </p>
                        <button type="submit" className="btn btn-dark" style={{ width: "250px", marginRight: "20px"}}>Bookmark</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default DeatailDestinations;

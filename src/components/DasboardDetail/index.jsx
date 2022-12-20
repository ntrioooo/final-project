import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailListAirlines } from "../../actions/airlinesAction";
import { useParams } from "react-router-dom";
import Navbar from "../LandingPage/navbar";

function DashboardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [destinations, setDestinations] = useState(null);

  const { getDetailListAirlinesResult } = useSelector(
    (state) => state.AirlinesReducer
  );

  useEffect(() => {
    console.log("dispatching getListAirlines action with id:", id);
    dispatch(getDetailListAirlines(id));
  }, [dispatch, id]);

  // if (destinations === null) {
  //   return <h1 className="text-center">Lagi Loading Cuyy...</h1>;
  // }

  return (
    <div className="container">
      <Navbar />
      <div className="container top">
        <h1 className="text-center mt-2 mb-5">
          Detail Destination
          <div className="row">
            <div className="col-md">
              <img src="" alt="GAMBAR" />
            </div>
            <div className="col-md px-5 py-5">
              <div>
                <strong>originAirport:</strong>{" "}
                {getDetailListAirlinesResult.originAirport}
              </div>
              <div>
                <strong>price:</strong> {getDetailListAirlinesResult.Price}
              </div>
              <button
                type="submit"
                class="btn btn-dark"
                style={{ width: "250px", marginRight: "20px" }}
              >
                Bookmark
              </button>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default DashboardDetail;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailListAirlines } from "../../actions/airlinesAction";

function DashboardDetail(props) {
  const { id } = props;
  const { getDetailListAirlinesResult } = useSelector(
    (state) => state.AirlineReducer
  );

  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getDetailListAirlines(id));
  }, [dispatch, id]);

  return (
    <div>
      DashboardDetail
      {getDetailListAirlinesResult &&
        getDetailListAirlinesResult.map((airline) => {
          return (
            <ul key={airline.id}>
              <li>{airline.originAirport}</li>
              <li>{airline.id}</li>
            </ul>
          );
        })}
    </div>
  );
}

export default DashboardDetail;

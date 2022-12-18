import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editListAirlines,
  getListAirlines,
} from "../../actions/airlinesAction";

function EditMaskapai(props) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    console.log('dispatching getListAirlines action with id:', id);
    dispatch(getListAirlines(id));
  }, [dispatch, id]);

  const { getListAirlinesResult, editAirlinesResult } = useSelector(
    (state) => state.AirlinesReducer
  );
  
  useEffect(() => {
    console.log('getListAirlinesResult:', getListAirlinesResult);
    if (getListAirlinesResult) {
      setData(getListAirlinesResult);
    }
  }, [getListAirlinesResult]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editListAirlines(id, data));
  };

  return (
    <div className="container mt-5">
      <h3>Edit Maskapai</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="originAirport">Asal</label>
          <input
            type="text"
            className="form-control"
            id="originAirport"
            name="originAirport"
            value={data.originAirport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="destinationAirport">Tujuan</label>
          <input
            type="text"
            className="form-control"
            id="destinationAirport"
            name="destinationAirport"
            value={data.destinationAirport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="flightDate">Tanggal</label>
          <input
            type="date"
            className="form-control"
            id="flightDate"
            name="flightDate"
            value={data.flightDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="depatureHour">Jam Berangkat</label>
          <input
            type="time"
            className="form-control"
            id="depatureHour"
            name="depatureHour"
            value={data.depatureHour}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalHour">Jam Sampai</label>
          <input
            type="time"
            className="form-control"
            id="ArrivalHour"
            name="ArrivalHour"
            value={data.ArrivalHour}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="flightDate">Price</label>
          <input
            type="number"
            className="form-control"
            id="Price"
            name="Price"
            value={data.Price}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default EditMaskapai;

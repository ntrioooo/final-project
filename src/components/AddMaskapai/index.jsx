import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addListAirlines } from "../../actions/airlinesAction";

function AddMaskapai() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [originAirport, setOriginAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [depatureHour, setDepatureHour] = useState("");
  const [arrivalHour, setArrivalHour] = useState("");
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);

    // Dispatch an action with the form data as payload
    dispatch(
      addListAirlines({
        originAirport: originAirport,
        destinationAirport: destinationAirport,
        flightDate: flightDate,
        Price: price,
        arrivalHour: arrivalHour,
        depatureHour: depatureHour
      })
    );

    navigate("/dashboard");

    console.log(originAirport, destinationAirport, flightDate, price);
  };

  return (
    <div>
      <div className="container mt-5">
        <h3>Add Maskapai</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="originAirport">Asal</label>
            <input
              type="text"
              className="form-control"
              id="originAirport"
              name="originAirport"
              onChange={(e) => setOriginAirport(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="destinationAirport">Tujuan</label>
            <input
              type="text"
              className="form-control"
              id="destinationAirport"
              name="destinationAirport"
              onChange={(e) => setDestinationAirport(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="flightDate">Tanggal</label>
            <input
              type="date"
              className="form-control"
              id="flightDate"
              name="flightDate"
              onChange={(e) => setFlightDate(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="depatureHour">Jam Berangkat</label>
            <input
              type="time"
              className="form-control"
              id="depatureHour"
              name="depatureHour"
              onChange={(e) => setDepatureHour(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="arrivalHour">Jam Sampai</label>
            <input
              type="time"
              className="form-control"
              id="ArrivalHour"
              name="ArrivalHour"
              onChange={(e) => setArrivalHour(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="Price"
              name="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMaskapai;

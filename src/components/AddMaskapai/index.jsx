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
      })
    );

    navigate("/dashboard");

    console.log(originAirport, destinationAirport, flightDate, price);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Bandara Asal
          <input
            type="text"
            name="originAirport"
            onChange={(e) => setOriginAirport(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bandara Tujuan
          <input
            type="text"
            name="destinatonAirport"
            onChange={(e) => setDestinationAirport(e.target.value)}
          />
        </label>
        <br />
        <label>
          Flight Date
          <input
            type="date"
            name="flightDate"
            onChange={(e) => setFlightDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price
          <input
            type="number"
            name="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddMaskapai;

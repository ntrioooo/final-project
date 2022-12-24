import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addListAirlines } from "../../actions/airlinesAction";
import listClass from "../../list-class";
import { getListAirlines } from "../../actions/airlinesAction";
import { addListSchedule } from "../../actions/scheduleAction";
import swal from "sweetalert";

function AddMaskapai() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("use effect component did mount (airlines)");

    dispatch(getListAirlines());
  }, [dispatch]);

  const [Origin_Airport, setOriginAirport] = useState("");
  const [Destination_Airport, setDestinationAirport] = useState("");
  const [flight_Date, setFlightDate] = useState("");
  const [Departure_Hour, setDepatureHour] = useState("");
  const [Arrival_Hour, setArrivalHour] = useState("");
  const [Price, setPrice] = useState();
  const [Plane_class, setTipeClass] = useState("");
  const [Airline_Name, setAirlineName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      Origin_Airport: Origin_Airport,
      Destination_Airport: Destination_Airport,
      flight_Date: flight_Date,
      Price: Price,
      Arrival_Hour: Arrival_Hour,
      Departure_Hour: Departure_Hour,
      Plane_class: Plane_class,
      Airline_Name: Airline_Name,
    };

    dispatch(addListSchedule(payload));

    swal("SUCCESS", "Jadwal penerbangan berhasil ditambahkan", "success");

    navigate("/dashboard");
  };

  return (
    <div>
      <div className="container mt-5">
        <h3>Tambah Jadwal Penerbangan</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="Origin_Airport">Bandara Asal</label>
            <select
              name="Origin_Airport"
              className="form-select"
              onChange={(e) => setOriginAirport(e.target.value)}
            >
              <option hidden>Pilih Bandara Tujuan</option>
              {getListAirlinesResult &&
                getListAirlinesResult.map((airline) => {
                  return (
                    <option key={airline.id} value={airline.Airport_Name}>
                      {airline.Airport_Name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Destination_Airport">Bandara Tujuan</label>
            <select
              name="Destination_Airport"
              className="form-select"
              onChange={(e) => setDestinationAirport(e.target.value)}
            >
              <option hidden>Pilih Bandara Asal</option>
              {getListAirlinesResult &&
                getListAirlinesResult.map((airline) => {
                  return (
                    <option key={airline.id} value={airline.Airport_Name}>
                      {airline.Airport_Name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Airline_Name">Nama Pesawat</label>
            <input
              type="text"
              className="form-control"
              id="Airline_Name"
              name="Airline_Name"
              onChange={(e) => setAirlineName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="flight_Date">Tanggal</label>
            <input
              type="date"
              className="form-control"
              id="flight_Date"
              name="flight_Date"
              onChange={(e) => setFlightDate(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Depature_Hour">Jam Berangkat</label>
            <input
              type="time"
              className="form-control"
              id="Departure_Hour"
              name="Departure_Hour"
              onChange={(e) => setDepatureHour(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Arrival_Hour">Jam Sampai</label>
            <input
              type="time"
              className="form-control"
              id="Arrival_Hour"
              name="Arrival_Hour"
              onChange={(e) => setArrivalHour(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Plane_class">Tipe Class</label>
            <select
              name="Plane_class"
              className="form-select"
              onChange={(e) => setTipeClass(e.target.value)}
            >
              <option hidden>Pilih Tipe Class</option>
              {listClass.map((list) => (
                <option key={list.id} value={list.class}>
                  {list.class}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Price">Price</label>
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

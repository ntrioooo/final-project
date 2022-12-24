import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListAirlines,
  getDetailListAirlines,
} from "../../actions/airlinesAction";
import {
  editListSchedule,
} from "../../actions/scheduleAction";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import listClass from "../../list-class";

function EditMaskapai() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    getListAirlinesResult,
  } = useSelector((state) => state.AirlinesReducer);

  // useEffect(() => {
  //   console.log("dispatching getListAirlines action with id:", id);
  //   dispatch(getDetailListAirlines(id));
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure want edit?",
      text: "File will be updated",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(editListSchedule(id, data));
        swal("Poof! Data has been updated", {
          icon: "success",
        });
        navigate("/dashboard");
      } else {
        swal("Data is safe");
      }
    });
  };

  return (
    <div className="container mt-5">
      <h3>Edit Jadwal Penerbangan</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="Origin_Airport">Bandara Asal</label>
          <select
            name="Origin_Airport"
            className="form-select"
            onChange={handleChange}
            defaultValue={data.Origin_Airport}
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
          <label htmlFor="Destination_Airport">Bandara Tujuan</label>
          <select
            name="Destination_Airport"
            className="form-select"
            onChange={handleChange}
            defaultValue={data.Destination_Airport}
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
          <label htmlFor="Airline_Name">Nama Pesawat</label>
          <input
            type="text"
            className="form-control"
            id="Airline_Name"
            name="Airline_Name"
            onChange={handleChange}
            defaultValue={data.Airline_Name}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="flight_Date">Tanggal</label>
          <input
            type="date"
            className="form-control"
            id="flight_Date"
            name="flight_Date"
            onChange={handleChange}
            defaultValue={data.flight_Date}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="Depature_Hour">Jam Berangkat</label>
          <input
            type="time"
            className="form-control"
            id="Departure_Hour"
            name="Departure_Hour"
            onChange={handleChange}
            defaultValue={data.Departure_Hour}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="Arrival_Hour">Jam Sampai</label>
          <input
            type="time"
            className="form-control"
            id="Arrival_Hour"
            name="Arrival_Hour"
            onChange={handleChange}
            defaultValue={data.Arrival_Hour}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="Plane_class">Tipe Class</label>
          <select
            name="Plane_class"
            className="form-select"
            onChange={handleChange}
            defaultValue={data.Plane_class}
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
            onChange={handleChange}
            defaultValue={data.Price}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditMaskapai;

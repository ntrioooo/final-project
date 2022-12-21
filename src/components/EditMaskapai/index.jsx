import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editListAirlines,
  getListAirlines,
  getDetailListAirlines
} from "../../actions/airlinesAction";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function EditMaskapai() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();

  const { getListAirlinesResult, editAirlinesResult, getDetailListAirlinesResult } = useSelector(
    (state) => state.AirlinesReducer
  );
  
  useEffect(() => {
    console.log("dispatching getListAirlines action with id:", id);
    dispatch(getDetailListAirlines(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (getDetailListAirlinesResult) {
      setData(getDetailListAirlinesResult);
    }
  }, [getDetailListAirlinesResult]);

  // useEffect(() => {
  //   if (getListAirlinesResult) {
  //     setData({
  //       originAirport: getListAirlinesResult.originAirport,
  //       destinationAirport: getListAirlinesResult.destinationAirport,
  //       price: getListAirlinesResult.price,
  //       flightDate: getListAirlinesResult.flightDate,
  //       ArrivalHour: getListAirlinesResult.ArrivalHour,
  //       depatureHour: getListAirlinesResult.depatureHour,
  //     });
  //   }
  // }, [getListAirlinesResult]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(editListAirlines(id, data));
    swal({
      title: "Are you sure want edit?",
      text: "File will be updated",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(editListAirlines(id, data));
        swal("Poof! Data has been updated", {
          icon: "success",
        });
        navigate('/dashboard')
      } else {
        swal("Data is safe");
      }
    });
  };

  return (
    <div className="container mt-5">
      <h3>Edit Maskapai</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="originAirport">Asal</label>
          <input
            type="text"
            className="form-control"
            id="originAirport"
            name="originAirport"
            defaultValue  ={data.originAirport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="destinationAirport">Tujuan</label>
          <input
            type="text"
            className="form-control"
            id="destinationAirport"
            name="destinationAirport"
            defaultValue  ={data.destinationAirport}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="flightDate">Tanggal</label>
          <input
            type="date"
            className="form-control"
            id="flightDate"
            name="flightDate"
            defaultValue  ={data.flightDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="depatureHour">Jam Berangkat</label>
          <input
            type="time"
            className="form-control"
            id="depatureHour"
            name="depatureHour"
            defaultValue  ={data.depatureHour}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="arrivalHour">Jam Sampai</label>
          <input
            type="time"
            className="form-control"
            id="ArrivalHour"
            name="ArrivalHour"
            defaultValue  ={data.ArrivalHour}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="flightDate">Price</label>
          <input
            type="number"
            className="form-control"
            id="Price"
            name="Price"
            defaultValue  ={data.Price}
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="btn btn-primary mt-3"/>
      </form>
    </div>
  );
}

export default EditMaskapai;

import React, { useEffect, useState } from "react";
import Navbar from "../../admin/NavbarAdmin";
import { useSelector, useDispatch } from "react-redux";
import { getIsiDetail } from "../../actions/formAction";

function DaftarPesanan() {
  const { getIsiDetailResult  } = useSelector((state) => state.Airlines);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getIsiDetail())

}, [dispatch])




  return (
    <div>
      <Navbar />
      <div className="container mt-5 pesanan">
        <div className="row">
          <div className="col-6">
            <h3 className="fs-4 mb-3">Pesanan Buyer</h3>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <table className="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    No
                  </th>
                  <th scope="col">Nama</th>
                  <th scope="col">Asal</th>
                  <th scope="col">Tujuan</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Tiket</th>
                  <th scope="col">Tipe</th>
                  <th scope="col">Kelas</th>
                  <th scope="col">No HP</th>
                </tr>
              </thead>
              {getIsiDetailResult && 
                getIsiDetailResult.map((airline, index) => {
                  return (
                    <tbody key={airline.id}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{airline.nama}</td>
                        <td>{airline.originAirport}</td>
                        <td>{airline.destinationAirport}</td>
                        <td>{airline.flightDate}</td>
                        <td>{airline.Price}</td>
                        <td>{airline.totalPassenger}</td>
                        <td>{airline.tipe}</td>
                        <td>{airline.planeClass}</td>
                        <td>{airline.HP}</td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaftarPesanan;

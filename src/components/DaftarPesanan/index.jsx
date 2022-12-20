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
            <h3 className="fs-4 mb-3">Pesanan</h3>
          </div>
          <div className="col-6">
            <a href="/#" className="btn btn-primary kanan" id="kanan">
              Tambah Pesanan
            </a>
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
                  <th scope="col">Pesawat</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Action</th>
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
                        <td>
                          <button className="btn btn-primary me-2">Edit</button>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
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

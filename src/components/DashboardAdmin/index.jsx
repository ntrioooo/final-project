import React, { useEffect } from "react";
import {
  getListAirlines,
  deleteListAirlines,
} from "../../actions/airlinesAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DashboardAdmin = (props) => {
  const { getListAirlinesResult } = useSelector(
    (state) => state.AirlinesReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const handleClick = (id) => {
    swal({
      title: "Are you sure?",
      text: "File will be deleted permanent",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteListAirlines(id));
        swal("Poof! Data has been deleted", {
          icon: "success",
        });
      } else {
        swal("Data is safe");
      }
    });
  };

  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar --> */}
      <div className="sidebar" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-3 primary-text fs-4 fw-bold text-uppercase">
          <img src="images/Logo.svg" alt="logo" style={{ width: "80px" }} />
        </div>
        <div className="list-group list-group-flush my-3">
          <div className="card mx-2 my-2 shadow-lg">
            <a
              href="/#"
              className="list-group-item list-group-item-action active"
              id="hapus"
            >
              <i className="fa-sharp fa-solid fa-house-chimney me-2"> |</i>Home
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action fw-bold"
              id="hapus"
            >
              <i className="fa-sharp fa-solid fa-plane me-2"> |</i>Daftar
              Maskapai
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action fw-bold"
              id="hapus"
            >
              <i className="fa-sharp fa-solid fa-cart-shopping me-2"> |</i>
              Daftar Pesanan
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action text-danger fw-bold"
              id="hapus"
            >
              <i className="fas fa-power-off me-2"> |</i>Logout
            </a>
          </div>
        </div>
      </div>
      {/* <!-- end Sidebar --> */}

      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              className="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
            ></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <a
                  className="nav-link second-text fw-bold"
                  href="/#"
                  id="notifcation"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-sharp fa-solid fa-bell me-2"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle second-text fw-bold"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-sharp fa-solid fa-user-secret me-2"></i>
                  Administrator
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  id="dropdown-menu"
                >
                  <li>
                    <a className="dropdown-item" href="/#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid px-4">
          <div className="row g-3 my-2">
            <div className="col-md-3">
              <div
                className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg"
                id="card"
              >
                <div>
                  <p className="fs-5">Maskapai</p>
                  <h3 className="fs-2">12</h3>
                </div>
                <i className="fa-sharp fa-solid fa-plane fs-1 border rounded-full bg-white p-3"></i>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg"
                id="card"
              >
                <div>
                  <p className="fs-5">Pesanan</p>
                  <h3 className="fs-2">12</h3>
                </div>
                <i className="fa-sharp fa-solid fa-cart-shopping fs-1 primary-text border rounded-full bg-white p-3"></i>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg"
                id="card"
              >
                <div>
                  <p className="fs-5">Pengguna</p>
                  <h3 className="fs-2">9</h3>
                </div>
                <i className="fa-sharp fa-solid fa-user fs-1 primary-text border rounded-full bg-white p-3"></i>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded shadow-lg"
                id="card"
              >
                <div>
                  <p className="fs-5">Admin</p>
                  <h3 className="fs-2">1</h3>
                </div>
                <i className="fa-sharp fa-solid fa-user-secret fs-1 primary-text border rounded-full bg-white p-3"></i>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <h3 className="fs-4 mb-3">Maskapai</h3>
            <div className="col">
              <table className="table bg-white rounded shadow-sm  table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">
                      No
                    </th>
                    <th scope="col">Pesawat</th>
                    <th scope="col">Asal</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Jam Berangkat</th>
                    <th scope="col">Jam Sampai</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {getListAirlinesResult &&
                  getListAirlinesResult.map((airline, index) => {
                    return (
                      <tbody key={airline.id}>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>Pesawat</td>
                          <td>{airline.originAirport}</td>
                          <td>{airline.destinationAirport}</td>
                          <td>{airline.flightDate}</td>
                          <td>{airline.depatureHour}</td>
                          <td>{airline.ArrivalHour}</td>
                          <td>{airline.Price}</td>
                          <td>
                            <Link
                              to={{
                                pathname: "/dashboard/edit/" + airline.id,
                                state: props,
                              }}
                            >
                              <button className="btn btn-primary">Edit</button>
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleClick(airline.id)}
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;

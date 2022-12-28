import React, { useEffect, useState } from "react";
import { whoAmI, editListUsers } from "../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getIsiDetail } from "../../actions/formAction";

function Pesanan() {
  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  const { getIsiDetailResult, getIsiDetailLoading, getIsiDetailError } =
    useSelector((state) => state.Airlines);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState(null)

  const handleClick = (price) => {
    setValue(price)
  }

  useEffect(() => {
    console.log("dispatching who login action with id: ", whoAmIResult.id);
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIsiDetail());
  }, [getIsiDetail]);

  useEffect(() => {
    if (value) {
      navigate('/pesanan-saya/tiket', { state: { price: value } });
    }
  }, [value, navigate]);

  const filteredBooking = Array.isArray(getIsiDetailResult)
    ? getIsiDetailResult.filter(
        (booking) => booking.user_id === whoAmIResult.id
      )
    : [];



  console.log(filteredBooking);

  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar --> */}
      <div className="sidebar bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-3 primary-text fs-4 fw-bold text-uppercase">
          <img src="images/Logo.svg" alt="logo" style={{ width: "80px" }} />
        </div>
        <div className="list-group list-group-flush my-3">
          <div className="mx-2 my-2">
            <a
              href="/#"
              className="list-group-item list-group-item-action active"
              id="hapus"
            >
              <i className="fa-sharp fa-solid fa-house-chimney me-2"></i>Profile
              saya
            </a>
            <a
              href="/#"
              className="list-group-item list-group-item-action fw-bold"
              id="hapus"
            >
              <i className="fa-sharp fa-solid fa-cart-shopping me-2"></i>Pesanan
              Saya
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
            <h2 className="fs-2 m-0">Pesanan</h2>
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
                  <i className="fa-sharp fa-solid fa-user me-2"></i>Hello,{" "}
                  {whoAmIResult.Name}
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
          <div className="row g-3 my-2"></div>

          <div className="row my-5">
            <h3 className="fs-4 mb-3">Daftar Pesanan</h3>
            <div className="col">
              <table className="table bg-white rounded shadow-sm  table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">
                      No
                    </th>
                    <th scope="col">Dari</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Tipe</th>
                    <th scope="col">Tiket</th>
                    <th scope="col">Tanggal</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>

                {getIsiDetailResult ? (
                  filteredBooking.length > 0 ? (
                    filteredBooking.map((booking, index) => {
                      return (
                        <tbody key={booking.id}>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{booking.origin_name}</td>
                            <td>{booking.destination_name}</td>
                            <td>{booking.flight_type}</td>
                            <td>{booking.total_passenger}</td>
                            <td>{booking.flight_date.slice(0, 10)}</td>
                            <td>
                            {/* <Link to='/pesanan-saya/tiket'> */}
                              <button className="btn btn-dark" onClick={() => handleClick(booking.price)}>
                                View
                              </button>
                            {/* </Link> */}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  ) : (
                    <p className="text-center">Tidak Pernah Pesan</p>
                  )
                ) : getIsiDetailLoading ? (
                  <h1>Loading</h1>
                ) : (
                  <h1>
                    {getIsiDetailError ? getIsiDetailError : "Data Kosong"}
                  </h1>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesanan;

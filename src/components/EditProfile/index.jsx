import React, { useEffect, useState } from "react";
import { whoAmI, editListUsers } from "../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  const { editListUsersResult } = useSelector((state) => state.UsersReducer);

  const [data, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatching getListAirlines action with id: ", whoAmIResult.id);
    dispatch(whoAmI());
  }, [dispatch]);

  //   useEffect(() => {
  //     console.log("dispatching getListAirlines action with id: ", id);
  //     dispatch(editListUsers(id));
  //   }, [dispatch, id]);

  useEffect(() => {
    if (whoAmIResult) {
      setData(whoAmIResult);
    }
  }, [whoAmIResult]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editListUsers(id, data));

    // console.log(dispatch(editListUsers(id, data)))
    // console.log(editListUsersResult)
  };


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
              Saya
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
            <h2 className="fs-2 m-0">Edit Profile</h2>
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
                  <i className="fa-sharp fa-solid fa-user me-2"></i>Hello, {whoAmIResult.Name},
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
            <h3 className="fs-4 mb-3">Edit Profile</h3>
            <div className="col">
              <form
                style={{ width: "400px" }}
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
              <img src={whoAmIResult.Foto} alt="Foto User" />
              <input type="file" name="Foto" />
                <div className="mt-3 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="Email"
                    defaultValue={data.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="namalengkap"
                    name="Name"
                    defaultValue={data.Name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Alamat
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="alamat"
                    name="Address"
                    defaultValue={data.Address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    No Telepon
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nohp"
                    name="Phone_Number"
                    defaultValue={data.Phone_Number}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    defaultValue={data.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ width: "400px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

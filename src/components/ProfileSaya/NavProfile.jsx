import { React, useState, useEffect } from 'react';
import { whoAmI } from '../../actions/usersAction';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import Logo from "../../assets/images/Logo.svg"


const NavProfile = () => {
    const { id } = useParams()

    const { whoAmIResult } = useSelector((state) => state.UsersReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("dispatching getListAirlines action with id: ", whoAmIResult.id);
        dispatch(whoAmI());
    }, [dispatch]);

    return (
        <>
            <nav className="navigation-bar d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="navigation-bar-left col-6 d-flex align-items-center">
                            <button type="button" className="navbar-open-btn text-grey-blue me-3">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="navbar-logo">
                                <h2>Tripie E-ticket</h2>
                            </div>
                        </div>

                        <div className="navigation-bar-right col-6 d-flex align-items-center justify-content-end">
                            <div className="btn-group dropstart dropdown notification-btn text-grey-blue me-3">
                                <a className="nav-link " data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa-regular fa-bell"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><h3 className="dropdown-item-text" id="disabledSelect">Notification</h3></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="btn-group dropdown-center profile-btn">
                                <a className="nav-link " data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="me-2">Halo, {whoAmIResult.Name}</i>
                                    <i className="fas fa-user"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
                                    <li>
                                        <Link to={`/edit-profile/${whoAmIResult.id}`} className="dropdown-item">Edit Profile</Link>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navigation-sidebar bg-light-grey">
                <div className="navbar-sb-head d-flex justify-content-between align-items-center px-4">
                    <img src={Logo} />
                    <button className="navbar-close-btn text-grey-blue">
                        <i className='fas fa-arrow-left'></i>
                    </button>
                </div>

                <div className="navbar-sb-list p-4">
                    <div className="navbar-sb-item mb-5">
                        <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">from Tripie Team to Indonesia</h5>
                        <ul className="navbar-sb-links p-0 list-unstyled">
                            <li className="navbar-sb-link my-3">
                                <Link to={`/profile`} className="text-decoration-none d-flex align-items-center justify-content-between">
                                    <div className="text-light-blue d-flex align-items-center">
                                        <span className="navbar-sb-icon me-3">
                                            <i className="fa-regular fa-circle-user"></i>
                                        </span>
                                        <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Profile Saya</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="navbar-sb-link my-3">
                                <Link to={`/pesanan-saya`} className="text-decoration-none d-flex align-items-center justify-content-between">
                                    <div className="text-light-blue d-flex align-items-center">
                                        <span className="navbar-sb-icon me-3">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </span>
                                        <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Pesanan Saya</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavProfile;
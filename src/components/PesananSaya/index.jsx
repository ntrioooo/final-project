import React from 'react'

function Pesanan() {
    return (
        <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar --> */}
            <div className="sidebar bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-3 primary-text fs-4 fw-bold text-uppercase">
                    <img src="images/Logo.svg" alt="logo" style={{ width: "80px" }} />
                </div>
                <div className="list-group list-group-flush my-3">
                    <div className="mx-2 my-2">
                        <a href="/#" className="list-group-item list-group-item-action active" id="hapus"><i
                            className="fa-sharp fa-solid fa-house-chimney me-2"></i>Profile saya</a>
                        <a href="/#" className="list-group-item list-group-item-action fw-bold" id="hapus"><i
                            className="fa-sharp fa-solid fa-cart-shopping me-2"></i>Pesanan Saya</a>
                    </div>
                </div>
            </div>
            {/* <!-- end Sidebar --> */}

            {/* <!-- Page Content --> */}
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light py-4 px-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                        <h2 className="fs-2 m-0">Pesanan</h2>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li>
                                <a className="nav-link second-text fw-bold" href="/#" id="notifcation" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa-sharp fa-solid fa-bell me-2"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle second-text fw-bold" href="/#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-sharp fa-solid fa-user me-2"></i>Hello, username
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Profile</a></li>
                                    <li><a className="dropdown-item" href="/#">Settings</a></li>
                                    <li><a className="dropdown-item" href="/#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid px-4">
                    <div className="row g-3 my-2">

                    </div>

                    <div className="row my-5">
                        <h3 className="fs-4 mb-3">Daftar Pesanan</h3>
                        <div className="col">
                            <table className="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="50">No</th>
                                        <th scope="col">Dari</th>
                                        <th scope="col">Tujuan</th>
                                        <th scope="col">Tipe</th>
                                        <th scope="col">Tiket</th>
                                        <th scope="col">Tanggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Soekarno - Hatta</td>
                                        <td>Ngunrah Rai</td>
                                        <td> </td>
                                        <td>1</td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pesanan;
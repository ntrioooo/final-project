import React, { useEffect, useState } from "react";
// import "../App.css";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Dropdown
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { getDetailListUsers } from "../../actions/usersAction";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { whoAmI } from "../../actions/usersAction";

function NavBar() {

  const { whoAmIResult } = useSelector((state) => state.UsersReducer)

  const [scrollY, setScrollY] = useState(0);
  const Token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("dispatching getListAirlines action with id:");
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    setIsLoggedIn(!!Token);
  }, [Token]);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.pageYOffset);
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  const scrolled = () => scrollY > 180;

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("wishlist");
    setIsLoggedIn(false);
    setIsLoading(false);
    navigate('/login')
  }
  
  return (
    <>
      <Navbar fixed="top" expand="lg" key={"lg"}>
        <Container className={`${!scrolled() ? "" : "invisible"}`}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <img src={logo} alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Navbar.Collapse id="basic-navbar-nav" className={`${!scrolled() ? "" : "invisible"}`}>
                <Nav className='me-auto'>
                  <Nav.Link className="navbar-link" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/experience">
                    Experience
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/destinations">
                    Destination
                  </Nav.Link>
                  <Nav.Link className="navbar-link " href="/about">
                    About
                  </Nav.Link>
                </Nav>
                {!isLoggedIn ? (
                  <span className="button-sign">
                    <NavLink to="/login">
                      <button>
                        <span style={{ marginLeft: '0px' }}>Sign In</span>
                      </button>
                    </NavLink>
                  </span>
                ) : (
                  <div className="btn-group">
                    <button type="button" className="btn btn-view dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcome, {whoAmIResult.Name}
                    </button>
                    <ul className="dropdown-menu">
                      <Link to='/pesanan-saya'>
                        <li><p className="dropdown-item">Pesanan saya</p></li>
                      </Link>
                      <Link to={`profile`}>
                        <li><p className="dropdown-item">Profile saya</p></li>
                      </Link>
                      <Link to={`dashboard`}>
                        <li><p className="dropdown-item">Dashboard</p></li>
                      </Link>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="/#" onClick={handleLogout}>Logout</a></li>
                    </ul>
                  </div>
                )}
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

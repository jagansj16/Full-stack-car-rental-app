import { useOktaAuth } from "@okta/okta-react";
import { Link, NavLink } from "react-router-dom";
import { SpinnerLoading } from "../utils/SpinnerLoading";

export const Navbar = () => {
  const { oktaAuth, authState } = useOktaAuth();
  if (!authState) {
    return <SpinnerLoading />;
  }

  const handleLogout = async () => oktaAuth.signOut();

  console.log(authState);

  return (
    <nav className="navbar navbar-expand-lg bg-transparent ">
      <div className="container-fluid navlayer ">
        <Link className="navbar-brand fw-bold navbtn" to="/">
          <img
            className="logo"
            src={require("./../../images/car-logo.png")}
            alt="logo"
          />
          car rental
        </Link>
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
          <ul className=" list navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                className=" nav-link text-dark fw-bold "
                aria-current="page"
                to="/home"
              >
                <div className="navbtn">Home</div>
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link text-dark navbtn" to="/search">
                <div className="navbtn"> Search Cars</div>
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link text-dark navbtn" to="/About">
                <div className="navbtn">About Us</div>
              </NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink className="nav-link text-dark navbtn" to="/Contact">
                <div className="navbtn">Contact Us</div>
              </NavLink>
            </li>
          </ul>
          <ul>
            {!authState.isAuthenticated ? (
              <li className="nav-item">
                <Link
                  className="btn btn-outline-primary btnhover fw-bold"
                  to="/login"
                >
                  Sign in
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary fw-bold"
                  type="submit"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

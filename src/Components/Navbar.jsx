import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <strong style={{ color: "#0073FF" }}>Medi</strong>
                  <strong style={{ color: "#FF9F6A" }}>Care+</strong>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end text-end"
                  id="navbarNavDropdown"
                >

                  <ul className="navbar-nav">
                    <li className="nav-item">
                      
                      <a
                        className="nav-link text-primary mx-3 active"
                        aria-current="page"
                        href="/"
                       >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-primary mx-3" href="/">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-primary mx-3" to="/services"> Services</Link>
                      {/* <a className="nav-link text-primary mx-3" href="/OurServices">
                        Service
                      </a> */}
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link text-primary mx-3" href="/speaciliest">
                        News
                      </a> */}
                      <Link className="nav-link text-primary mx-3" to="/speaciliest">News</Link>
                    </li>
                    <li className="nav-item bg-primary text-light rounded-5">
                      <a className="nav-link px-5 text-light" href="/">
                        Contact
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </nav>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

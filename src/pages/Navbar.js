import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import BrandContact from "./BrandContact";
function Navbar() {
    return (
        <Fragment>
            <Topbar />
            <BrandContact />
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="#" className="navbar-brand ms-3 d-lg-none">MENU</a>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav me-auto p-3 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
                        <Link to="/about" className="nav-item nav-link">About </Link>
                        <Link to="/service" className="nav-item nav-link">Services </Link>
                        <Link to="/project" className="nav-item nav-link">Projects </Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                                <Link to="/feature" className="dropdown-item">Feature</Link>
                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link" >Contact Us</Link>
                        {/* <a href="contact.html" className="nav-item nav-link">Contact Us</a> */}
                    </div>
                    <a href="#" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Get Started</a>
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar;
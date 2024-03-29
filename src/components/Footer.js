import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <Fragment>
            <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <Link className="btn btn-link" to="/contact">Contact Us</Link>
                            <Link className="btn btn-link" to="/service">Our Services</Link>
                            <Link className="btn btn-link" to="">Terms & Condition</Link>
                            <Link className="btn btn-link" to="">Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Gallery</h5>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="assets/img/project-1.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="assets/img/project-2.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="assets/img/project-3.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="assets/img/project-4.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="assets/img/project-5.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="assets/img/project-6.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto"  style={{maxWidth:' 400px'}}>
                                <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">

                                <a href="https://htmlcodex.com">HTML Codex</a>
                                <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;
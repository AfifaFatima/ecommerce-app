import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Services() {
    return (
        <Fragment>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  style={{maxWidth:' 600px'}}>
                        <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 className="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="service-item d-block rounded text-center h-100 p-4" href="">
                                <img className="img-fluid rounded mb-4" src="assets/img/service-1.jpg" alt="" />
                                <h4 className="mb-0">Web Design</h4>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="service-item d-block rounded text-center h-100 p-4" href="">
                                <img className="img-fluid rounded mb-4" src="assets/img/service-2.jpg" alt="" />
                                <h4 className="mb-0">App Development</h4>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="service-item d-block rounded text-center h-100 p-4" href="">
                                <img className="img-fluid rounded mb-4" src="assets/img/service-3.jpg" alt="" />
                                <h4 className="mb-0">SEO Optimization</h4>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="service-item d-block rounded text-center h-100 p-4" href="">
                                <img className="img-fluid rounded mb-4" src="assets/img/service-4.jpg" alt="" />
                                <h4 className="mb-0">Social Marketing</h4>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="service-item d-block rounded text-center h-100 p-4" href="">
                                <img className="img-fluid rounded mb-4" src="assets/img/service-5.jpg" alt="" />
                                <h4 className="mb-0">Email Marketing</h4>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="service-item d-block rounded text-center h-100 p-4" href="">
                                <img className="img-fluid rounded mb-4" src="assets/img/service-6.jpg" alt="" />
                                <h4 className="mb-0">PPC Advertising</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Services;
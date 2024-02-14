import React, { Fragment } from "react";
import Footer from "./Footer";
import About from "./About";
import Facts from "./Facts";
import Projects from "./Projects";
import Topbar from "./Topbar";
import Services from "./Services";
import Feature from "./Feature";
import Team from "./Team";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BrandContact from "./BrandContact";
function Home() {
    return (
        <Fragment>

            <Navbar />

            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                            <img className="img-fluid" src="assets/img/carousel-1.jpg" alt="Image" />
                        </button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2">
                            <img className="img-fluid" src="assets/img/carousel-2.jpg" alt="Image" />
                        </button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3">
                            <img className="img-fluid" src="assets/img/carousel-3.jpg" alt="Image" />
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="assets/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth:' 900px'}}>
                                    <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                                    <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="assets/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth:' 900px'}}>
                                    <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                                    <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="assets/img/carousel-3.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{maxWidth:' 900px'}} >
                                    <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                                    <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Facts start */}

            <Facts />

            {/* about start */}

            <About />
            <Services />
            <Feature />

            {/* project start */}

            <Projects />
            <Team />
            <Testimonial />

            <Footer />

        </Fragment>
    )
}
export default Home;
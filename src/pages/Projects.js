import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Projects() {
    return (
        <Fragment>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: ' 600px' }}>
                        <h6 className="section-title bg-white text-center text-primary px-3">Our Projects</h6>
                        <h1 className="display-6 mb-4">Learn More About Our Complete Projects</h1>
                    </div>
                    <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="project-item border rounded h-100 p-4" data-dot="01">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-1.jpg" alt="" />
                                <a href="assets/img/project-1.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="02">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-2.jpg" alt="" />
                                <a href="assets/img/project-2.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="03">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-3.jpg" alt="" />
                                <a href="assets/img/project-2.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="04">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-4.jpg" alt="" />
                                <a href="assets/img/project-4.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="05">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-5.jpg" alt="" />
                                <a href="assets/img/project-5.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="06">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-6.jpg" alt="" />
                                <a href="assets/img/project-6.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="07">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-7.jpg" alt="" />
                                <a href="assets/img/project-7.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="08">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-8.jpg" alt="" />
                                <a href="assets/img/project-8.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="09">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-9.jpg" alt="" />
                                <a href="assets/img/project-9.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div className="project-item border rounded h-100 p-4" data-dot="10">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded" src="assets/img/project-10.jpg" alt="" />
                                <a href="assets/img/project-10.jpg" data-lightbox="project"><i className="fa fa-eye fa-2x"></i></a>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default Projects;
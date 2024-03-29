import React, { Fragment } from "react";
function Topbar() {
    return (
        <Fragment>
            <div className="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Career</a></li>
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Terms</a></li>
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Privacy</a></li>
                        </ol>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn-square text-primary border-end rounded-0" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn-square text-primary border-end rounded-0" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn-square text-primary border-end rounded-0" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn-square text-primary pe-0" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Topbar;
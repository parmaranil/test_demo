import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faStarHalfStroke, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faMemo } from '@fortawesome/free-regular-svg-icons'
const Header = () => {
    return (< >
        <div className="site-wrappe">
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <span className="btn rounded-circle bg-primary p-3">
                        </span>
                    </div>
                    <div className="col-md-6">
                        <div className="float-end">
                            <a className="text-secondary btn rounded-0 me-5 px-4 test-about-us" href="#">About us</a>
                            <a className="btn theme-bgcolor rounded-0 text-white px-4" href="#">Enquire Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <section className="section-2 container text-center mt-5">

                    <h1 className="text-white fw-bold mb-0 ">Create Your Legal Documents In</h1>
                    <p className="fs-1 fw-bold theme-text-color my-0 ">Minutes</p>
                    <p className="text-muted lead blockquote fw-light">
                        LegalDesk.com is india's trusted,Do-it-Yourself platform for
                        making legal documnets online. The process of making legal
                        documentation is now made simple, quick and affordable.
                    </p>
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <button className="btn fw-bold mt-2 btn-primary rounded-0 px-4 py-2">Get Started</button>
                            <button className="btn fw-bold mt-2 bg-secondary rounded-0 px-4 py-2 ms-2">Direct Connect</button>

                        </div>
                        <div className="col-12 mt-5">
                            <img className="img-fluid" src="testdemo.jpg" alt="test demo">
                            </img>
                        </div>
                    </div>

                </section>
                <section className="section-2 mt-5 container">
                    <h2 className="text-white text-center fw-bold">How It Works?</h2>
                    <p className="text-muted lead text-center fw-light">
                        Select any of our legal documents based on your need and fill in
                        your details. Based on these details and the choices you make,
                        our system will start customizing the document.
                    </p>

                    <div className="row mt-4">
                        <div className="col-md-4 mt-1 mb-3">
                            <div className="text-center mb-2">
                                <span className="btn rounded-circle bg-primary p-2">
                                    <FontAwesomeIcon icon={faStarHalfStroke} className="p-2 fa-lg" />
                                </span>
                            </div>
                            <h6 className="text-white fw-bold">Cosumize Your Documents</h6>
                            <p className="text-muted small text-center fw-light">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                            </p>
                        </div>
                        <div className="col-md-4 mt-1 mb-3">
                            <div className="text-center mb-2">
                                <span className="btn rounded-circle bg-primary p-2">
                                    <FontAwesomeIcon icon={faStarHalfStroke} className="p-2 fa-lg" />
                                </span>
                            </div>
                            <h6 className="text-white fw-bold">Avail stamp paper services</h6>
                            <p className="text-muted small text-center fw-light">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                            </p>

                        </div>
                        <div className="col-md-4 mt-1 mb-3">
                            <div className="text-center mb-2">
                                <span className="btn rounded-circle bg-primary p-2">
                                    <FontAwesomeIcon icon={faStarHalfStroke} className="p-2 fa-lg" />
                                </span>                            </div>
                            <h6 className="text-white fw-bold">Get Door stap Delivery</h6>
                            <p className="text-muted small text-center  fw-light">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                            </p>
                        </div>
                        <div className="col-md-4 mt-1 mb-3">
                            <div className="text-center mb-2">
                                <span className="btn rounded-circle bg-primary p-2">
                                    <FontAwesomeIcon icon={faStarHalfStroke} className="p-2 fa-lg" />
                                </span>                            </div>
                            <h6 className="text-white fw-bold">Get Door stap Delivery</h6>
                            <p className="text-muted small text-center fw-light">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                            </p>
                        </div>
                        <div className="col-md-4 mt-1 mb-3">
                            <div className="text-center mb-2">
                                <span className="btn rounded-circle bg-primary p-2">
                                    <FontAwesomeIcon icon={faStarHalfStroke} className="p-2 fa-lg" />
                                </span>                            </div>
                            <h6 className="text-white fw-bold">Get Door stap Delivery</h6>
                            <p className="text-muted small text-center fw-light">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                            </p>
                        </div>
                        <div className="col-md-4 mt-1 mb-3">
                            <div className="text-center mb-2">
                                <span className="btn rounded-circle bg-primary p-2">
                                    <FontAwesomeIcon icon={faStarHalfStroke} className="p-2 fa-lg" />
                                </span>                            </div>
                            <h6 className="text-white fw-bold">Get Door stap Delivery</h6>
                            <p className="text-muted text-center small  fw-light">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                            </p>
                        </div>
                    </div>
                    <hr />
                </section>
                <section className="section-3 container mt-5">
                    <h2 className="text-white text-center fw-bold">Why Choose LegalDesk?</h2>
                    <p className="text-muted small text-center fw-light">
                        we have helped tens of thousands of people draft their own
                        agreements and constracts
                    </p>
                    <div className="row mt-2">
                        <div className="col-md-6 mb-3">
                            <p className="text-primary small">DRAFT YOUR DOCUMENT IN MINUTES GET IT DELIVERED</p>
                            <h5 className="text-white fw-bold">Quick & Easy</h5>
                            <p className="text-muted text-justify small  fw-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <img className="img-fluid legal-desk-img" src="testdemo.jpg" alt="test demo">
                            </img>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6 mb-3">
                            <img className="img-fluid test" src="testdemo.jpg" alt="test demo">
                            </img>
                        </div>
                        <div className="col-md-6 mb-3">
                            <p className="text-primary small">DRAFT YOUR DOCUMENT IN MINUTES GET IT DELIVERED</p>
                            <h5 className="text-white fw-bold">Quick & Easy</h5>
                            <p className="text-muted text-justify small  fw-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>


                    </div>
                </section>
                <section className="mt-5 container section-4">
                    <h2 className="text-white text-center fw-bold">Customer testimonials</h2>
                    <p className="text-muted small text-center fw-light">
                        we have helped tens of thousands of people draft their own
                        agreements and constracts

                    </p>
                    <div className="d-flex flex-md-row flex-wrap justify-content-center">
                        <div className="testimonial-card col">
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary ms-2 mt-4" />
                            <p className="text-secondary p-3 fw-light blockquote-footer">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur
                            </p>
                            <hr className="mx-3 text-secondary mt-5" />
                            <span className="ms-3 text-white">Roman Level /</span>
                            <span className="text-success">AppName</span>
                        </div>
                        <div className="testimonial-card col">

                            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary ms-2 mt-4" />
                            <p className="text-secondary p-3 fw-light blockquote-footer">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur
                            </p>
                            <hr className="mx-3 text-secondary mt-5" />
                            <span className="ms-3 text-white">Diana Rynzhuk /</span>
                            <span className="text-success">AppName</span>
                        </div>
                        <div className="testimonial-card col">
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary ms-2 mt-4" />
                            <p className="text-secondary p-3 fw-light blockquote-footer">
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.Excepteur sint
                                occaecat cupidatat.
                                Duis aute irule dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur
                            </p>
                            <hr className="mx-3 text-secondary mt-5" />
                            <span className="ms-3 text-white">Ben stafford /</span>
                            <span className="text-success">AppName</span>
                        </div>
                    </div>
                </section>
                <section className="section-5 container bg-primary mt-5 p-5 mb-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-white text-center">Do you want to create document</h3>
                        </div>
                        <div className="col-md-6 position-relative">
                            <input className="float-end px-4 py-2  " type="email" placeholder="your best email" />
                            <FontAwesomeIcon icon={faArrowRight} className="email-sent-error text-primary" />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="container mt-5">
                <div className="row">
                    <div className="col-3 ps-0">
                        <span className="btn rounded-circle bg-primary p-3">
                        </span>
                    </div>
                    <div class="col-9 text-end pe-0">
                        <FontAwesomeIcon icon={faFacebookF} className="text-primary" />
                        <FontAwesomeIcon icon={faTwitter} className="text-primary ms-4" />
                        <FontAwesomeIcon icon={faInstagram} className="text-primary ms-4" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 ps-0">
                        <p className="text-secondary small mt-3">Made by <span className="text-white"> ANil Parmar</span>. All right reserved</p>
                    </div>
                    <div className="col-md-6 float-end px-0 ">
                        <ul class="nav ms-auto float-end mt-1 pe-0 text-muted">
                            <li class="nav-item">
                                <a class="nav-link active text-muted" href="#">contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted" href="#">about us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted" href="#">FAQ's</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-muted" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    </>

    )
}

export default Header;
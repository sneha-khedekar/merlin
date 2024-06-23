import React from 'react'
import Button from '../components/button'

const footer = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="explore-more p-4 justify-content-center align-items-center d-flex">
                            <Button text="Explore more blogs" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div className='col-md-12'>
                        <div class="connect-with-us p-4 d-flex justify-content-center align-items-center gap-3">
                            <h4 class="text-white">Connect with us</h4>
                            <input type="email" placeholder="Email ID" className="form-control rounded-0 ml-2" />
                            <input type="text" placeholder="Contact No." className="form-control ml-2 rounded-0" />
                            <button class="btn bgprimary text-white ml-2 rounded-0">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bgprimary text-white pt-8 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <h6 className="font-weight-bold">Corporate Office</h6>
                            <p>
                                Merlin Oxford<br />
                                22, Prince Anwar Shah Road, 2nd Floor<br />
                                Kolkata 700 033
                            </p>
                            <p>
                                +91 33 4015 4500/45<br />
                                info@merlinprojects.com
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <h6 className="font-weight-bold">ABOUT</h6>
                            <ul className="list-unstyled">
                                <li>MD Speak</li>
                                <li>Associations</li>
                                <li>Testimonials</li>
                                <li>Awards & Accolades</li>
                            </ul>
                            <h6 className="font-weight-bold mt-4">Services</h6>
                            <ul className="list-unstyled">
                                <li>Home Loan FAQ</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <h6 className="font-weight-bold">CSR</h6>
                            <ul className="list-unstyled">
                                <li>Overview</li>
                                <li>CSR Initiatives</li>
                            </ul>
                            <h6 className="font-weight-bold mt-4">PARTNER US</h6>
                            <ul className="list-unstyled">
                                <li>Sampark</li>
                            </ul>
                            <h6>INTERNAL COMPLIANCE COMMITTEE</h6>
                            <h6>BLOG</h6>
                            <h6>CAREERS</h6>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <h6>NEWS & MEDIA</h6>
                            <ul className="list-unstyled">
                                <li>Press Coverage</li>
                                <li>Advertisements</li>
                                <li>Events</li>
                                <li>Branding</li>
                            </ul>
                            <h6>CONTACT</h6>
                            <h6>PRIVACY POLICY</h6>
                            <h6>TERMS & CONDITIONS</h6>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <h6 className="font-weight-bold">OUR PROJECTS</h6>
                            <ul className="list-unstyled">
                                <li>Residential</li>
                                <li>Consortium</li>
                                <li>Country Homes</li>
                                <li>Office Spaces</li>
                                <li>Club</li>
                                <li>Mall</li>
                                <li>Resort</li>
                            </ul>
                            <h6 className="font-weight-bold mt-4">FLAT TYPE</h6>
                            <ul className="list-unstyled">
                                <li>1 BHK Flats in Kolkata</li>
                                <li>2 BHK Flats in Kolkata</li>
                                <li>3 BHK Flats in Kolkata</li>
                                <li>4 BHK Flats in Kolkata</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row  align-items-center">
                        <div className="col-12 col-md-6 text-center text-md-left ">
                            <p className="mb-0">Founder Member</p>
                            <img src="https://placehold.co/100x30?text=CREDAI+BENGAL" alt="CREDAI BENGAL" width={100} height={30} />
                        </div>
                        <div className="col-12 col-md-6 text-center d-flex justify-content-md-center">
                            <p className="mb-0">Follow us on</p>
                            <a href="#"><img src="https://placehold.co/20x20?text=F" alt="Facebook" width={20} height={20} className="mx-1" /></a>
                            <a href="#"><img src="https://placehold.co/20x20?text=X" alt="Twitter" width={20} height={20} className="mx-1" /></a>
                            <a href="#"><img src="https://placehold.co/20x20?text=IN" alt="LinkedIn" width={20} height={20} className="mx-1" /></a>
                            <a href="#"><img src="https://placehold.co/20x20?text=IG" alt="Instagram" width={20} height={20} className="mx-1" /></a>
                            <a href="#"><img src="https://placehold.co/20x20?text=YT" alt="YouTube" width={20} height={20} className="mx-1" /></a>
                        </div>
                    </div>

                </div>
            </footer>
            {/* copyright */}
            <div className='container'>
                <div className="row mt-4">
                    <div className="col-md-6 text-center d-flex">
                        <img src="https://placehold.co/100x30?text=CREDAI+BENGAL" alt="CREDAI BENGAL" width={100} height={30} />
                    </div>
                    <div className="col-md-6 text-center d-flex">
                        <p className='justify-content-left  mx-2'>© 2024 Merlin Group All rights reserved</p>
                        <p className="d-inline-block  mx-2">Disclaimer |</p>
                        <p className="d-inline-block ">Sitemap</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default footer
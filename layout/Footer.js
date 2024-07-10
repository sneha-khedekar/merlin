import React from "react";
import Image from "next/image";
import ScrollToTop from "@/container/Home/ScrollToTop";
const footer = () => {
  return (
    <>

      <div className="enquiryButton">
        <button>Enquiry</button>
      </div>
      <div className="enquire-now text-light p-4">
        <h2 className="text-center mb-4">Enquire Now</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form className="space-y-4">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-12 col-md-6">
                    <input type="email" placeholder="Email ID" />
                  </div>
                  <div className="col-12 col-md-6 position-relative">
                    <select>
                      <option disabled selected value>Choose Option</option>
                      <option>Vendor Registration</option>
                      <option>New Project Enquiry</option>

                    </select>
                    <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-dark"></span>
                  </div>
                  <div className="col-12 col-md-4">
                    <input type="text" placeholder="Phone No." />
                  </div>
                  <div className="col-12 col-md-2">
                    <button class="submit" type="submit" >Submit</button>
                  </div>
                </div>
                <div className="form-check d-flex align-items-center mt-3 justify-content-center">
                  <input type="checkbox" id="authorize" className="form-check-input" />
                  <label htmlFor="authorize" className="form-check-label ms-2 text-sm text-light">I hereby authorize to send notifications on SMS/Messages/Promotional/Informational messages</label>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white text-white pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="d-flex mx-4">
                <span className="image-container mx-4">
                  <Image
                    layout="fill"
                    src="/image/logof.png"
                    className="image logo"
                    alt="Logo"
                  />
                </span>
                <div>
                  <h6 className="font-weight-bold">Corporate Office</h6>
                  <p>
                    Merlin Oxford
                    <br />
                    22, Prince Anwar Shah Road, 2nd Floor
                    <br />
                    Kolkata 700 033
                  </p>
                  <p>
                    +91 33 4015 4500/45
                    <br />
                    info@merlinprojects.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <ul className="list-unstyled d-flex gap-4">
                <li className="mb-2">
                  <a href="#" className="d-block">Newsworthy</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="d-block">Our Project</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="d-block">About</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="d-block">CSR</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="d-block">Media</a>
                </li>

              </ul>

            </div>
          </div>
        </div>

      </footer >
      {/* copyright */}
      < div className="container" >
        <div className="row mt-4 mb-2">
          <div class="col-md-6 text-md-center text-start d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <p>
              © 2024 -2025 Merlin Group All rights reserved &nbsp;&nbsp;
              <span className="d-none"> &nbsp;&nbsp;</span>
            </p>
            <div class="d-flex flex-column flex-md-row">
              <p>Disclaimer | Sitemap</p>
            </div>
          </div>
          <div className="col-md-6 text-center d-flex mb-3">
            <div className="founder mr-3">
              <p className="mb-0">Founder Member</p>
              <span className="image-container">
                <Image
                  layout="fill"
                  src="/image/creadai.png"
                  alt="CREDAI BENGAL"
                  className=""
                />
              </span>
            </div>
            <div className="follow-us mx-3">
              <p className="mb-0">Follow us on </p>
              <div className="gap-1 d-flex">
                <a className="icon-link" href="#">
                  <svg
                    fill="#ffffff"
                    height="22px"
                    width="22px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                  >
                    {/* SVG content */}
                  </svg>
                </a>
                <a className="icon-link" href="#">
                  <svg
                    fill="#ffffff"
                    width="22px"
                    height="22px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    stroke="#ffffff"
                  >
                    {/* SVG content */}
                  </svg>
                </a>
                <a className="icon-link" href="#">
                  <svg
                    fill="#ffffff"
                    height="22px"
                    width="22px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                  >
                    {/* SVG content */}
                  </svg>
                </a>
                <a className="icon-link" href="#">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    {/* SVG content */}
                  </svg>
                </a>
                <a className="icon-link" href="#">
                  <svg
                    fill="#ffffff"
                    width="22px"
                    height="22px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    {/* SVG content */}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div >
      <ScrollToTop />
    </>
  );
};

export default footer;

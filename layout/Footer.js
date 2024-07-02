import React from "react";
import Button from "../components/button";

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
          <div className="col-md-12">
            <div class="connect-with-us p-5  justify-content-center align-items-center gap-3">
              <h4 class="text-white">Connect with us</h4>
              <input
                type="email"
                placeholder="Email ID"
                className="form-control rounded-0 ml-2"
              />
              <input
                type="text"
                placeholder="Contact No."
                className="form-control ml-2 rounded-0"
              />
              <button class="btn bgprimary text-white ml-2 px-5 rounded-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bgprimary text-white pt-8 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-4 col-lg-3 mb-4">
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
            <div className="col-12 col-md-6 col-sm-4 col-lg-2 mb-4">
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
            <div className="col-12 col-md-6 col-sm-4 col-lg-2 mb-4">
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
            <div className="col-12 col-md-6 col-sm-4 col-lg-2 mb-4">
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
            <div className="col-12 col-md-6 col-sm-4 col-lg-3 mb-4">
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
            <div className="col-12 col-md-6 text-md-center text-start ">
              <p className="mb-0">Founder Member</p>
              <img
                src="/image/creadai.png"
                alt="CREDAI BENGAL"
                width={100}
                height={40}
              />
            </div>
            <div className="col-12 col-md-6 text-center d-flex justify-content-md-center">
              <p className="mb-0">Follow us on </p> &nbsp;
              <div className="gap-1 d-flex">
                <a href="#">
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
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    fill="#ffffff"
                    width="22px"
                    height="22px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                    </g>
                  </svg>
                </a>
                <a href="#">
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
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g fill="none" fillRule="evenodd">
                        <path d="m0 0h32v32h-32z"></path>
                        <path
                          d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z"
                          fill="#ffffff"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    fill="#ffffff"
                    width="22px"
                    height="22px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <path d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9 5 .443 5 3.9-.086 3.9-5 3.9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* copyright */}
      <div className="container">
        <div className="row mt-4 mb-2">
          <div className="col-md-6 text-center d-flex mb-3">
            <img
              src="/image/logof.png"
              alt="CREDAI BENGAL"
              width={100}
              height={25}
            />
          </div>

          <div class="col-md-6 text-md-center text-start d-flex flex-column flex-md-row align-items-start align-items-md-center">
            <p>
              © 2024 Merlin Group All rights reserved &nbsp;&nbsp;
              <span className="d-none"> &nbsp;&nbsp;</span>
            </p>
            <div class="d-flex flex-column flex-md-row">
              <p>Disclaimer | Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;

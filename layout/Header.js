import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./Navigation.module.css";
const StickyNavbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > 0) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.navbarWrapper}>
      <Container>
        <Navbar expand="lg" className={`navbar ${styles.navbar}`}>
          <Navbar.Brand href="/" className="ml-auto">
            <span className="image-container">
              <Image
                layout="fill"
                src="/image/logo.svg"
                className="image d-inline-block align-top logo"
                alt="Logo"
              />
            </span>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-white" href="#">
                About
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                Project
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                Career
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-lg-none d-flex gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></path>
            </svg>
          </div>
          <img
            src="/image/hamburger.png"
            onClick={handleShow}
            width={20}
            height={15}
            className="align-self-center ml-5 hamburger"
          />
        </Navbar>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <button className="close-btn" onClick={handleClose}>
            <Image
              src="/image/hamburger.png"
              alt="Close"
              width={24}
              height={24}
              className="default-icon"
            />{" "}
            <Image
              src="/image/close.png"
              alt="Close Hover"
              width={24}
              height={24}
              className="hover-icon"
            />{" "}
          </button>{" "}
          &nbsp; CLOSE
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav flex-column">
            <a className="nav-link text-white d-lg-none" href="#">
              ABOUT US
            </a>
            <a className="nav-link text-white mb-3 d-lg-none" href="#">
              PROJECTS
            </a>
            <a className="nav-link text-white" href="#">
              NEWS & MEDIA
            </a>
            <a className="nav-link text-white" href="#">
              CSR
            </a>
            <a className="nav-link text-white mb-3" href="#">
              PARTNER US
            </a>
            <a className="nav-link text-white mb-3" href="#">
              SERVICES
            </a>
            <a className="nav-link text-white" href="#">
              INTERNAL COMPLIANCE
            </a>
            <a className="nav-link text-white" href="#">
              COMMITTEE
            </a>
            <a className="nav-link text-white" href="#">
              BLOG
            </a>
            <a className="nav-link text-white d-lg-none" href="#">
              CAREER
            </a>
          </nav>
          <div className="mb-5 mt-5">
            <p className="text-white mb-0">Founder Member</p>
            <span className="image-container">
              <Image
                layout="fill"
                src="/image/creadai.png"
                alt="CREDAI BENGAL"
                className=""
              />
            </span>
          </div>
          <div className="follow-us">
            <p className="text-white mb-0">Follow us on </p>
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavigationBar;

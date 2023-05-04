import React, { useState } from "react";
import { Container } from "react-bootstrap";
import navLogo from "../assets/img/svg/nav_logo.svg";
import btnBg from "../assets/img/svg/bgBtn.svg";

const MyNav = () => {
  const [first, setfirst] = useState(false);
  if (first) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <section className="py-4 navBg">
      <Container>
        <nav className="d-flex align-items-center justify-content-between">
          <a href="#">
            <img className="w_110 w_md_168" src={navLogo} alt="navLogo" />
          </a>
          <ul
            className={
              first
                ? "mb-0 ps-0 d-flex align-items-center closeNav"
                : "mb-0 ps-0 d-flex align-items-center openNav"
            }
          >
            <button
              className="btn-close text-white position-absolute d-lg-none top-0 end-0 m-5"
              onClick={() => setfirst(false)}
            ></button>
            <li
              className="mx-2 mx-xl-3 my-3 my-lg-0"
              onClick={() => setfirst(false)}
            >
              <a
                className="text-white fs_sm fw-normal ff_magra position-relative navLinks"
                href="#"
              >
                Home
              </a>
            </li>
            <li
              className="mx-2 mx-xl-3 my-3 my-lg-0"
              onClick={() => setfirst(false)}
            >
              <a
                className="text-white fs_sm fw-normal ff_magra position-relative navLinks"
                href="#about"
              >
                About Us
              </a>
            </li>
            <li
              className="mx-2 mx-xl-3 my-3 my-lg-0"
              onClick={() => setfirst(false)}
            >
              <a
                className="text-white fs_sm fw-normal ff_magra position-relative navLinks"
                href="#nft"
              >
                NFTs
              </a>
            </li>
            <li
              className="mx-2 mx-xl-3 my-3 my-lg-0"
              onClick={() => setfirst(false)}
            >
              <a
                className="text-white fs_sm fw-normal ff_magra position-relative navLinks"
                href="#roadmap"
              >
                Roadmap
              </a>
            </li>
            <li
              className="mx-2 mx-xl-3 my-3 my-lg-0"
              onClick={() => setfirst(false)}
            >
              <a
                className="text-white fs_sm fw-normal ff_magra position-relative navLinks"
                href="#team"
              >
                Team
              </a>
            </li>
            <li
              className="mx-2 mx-xl-3 my-3 my-lg-0"
              onClick={() => setfirst(false)}
            >
              <a
                className="text-white fs_sm fw-normal ff_magra position-relative navLinks"
                href="#faq"
              >
                FAQ
              </a>
            </li>
            <li
              className="ms-lg-5  my-3 my-lg-0 position-relative z_3"
              onClick={() => setfirst(false)}
            >
              <button className="fs_xsm  text-white btnHover text-uppercase ff_highspeed navBtn fw-normal bg-transparent">
                Connect
              </button>
              <img className="positionBackground" src={btnBg} alt="btnBg" />
            </li>
          </ul>
          <div
            onClick={() => setfirst(true)}
            className="d-flex flex-column d-lg-none"
          >
            <span className="menuitems"></span>
            <span className="menuitems my-1"></span>
            <span className="menuitems"></span>
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default MyNav;

import React from "react";
import { Container } from "react-bootstrap";
import btnBg2 from "../assets/img/svg/bgBtn2.svg";
import btnBg1 from "../assets/img/svg/bgBtn1.svg";
import downBtn from "../assets/img/svg/downBtn.svg";

const HeroSection = () => {
  return (
    <div className="py-5 py-lg-5 position-relative z_4 d-flex flex-column align-items-center justify-content-center flex-grow-1" data-aos="fade-right">
      <Container>
        <h1 className="mb-0 fs_lg fw-normal text-white ff_highspeed text-center mt-3 text-sm-start">
          Ornare orn<span className="d-block my-1">nulla <span className="text_gridient">sed turp</span>
          </span>\is blandit</h1>
        <p className="mt-1 mb-5 text-white fs_sm fw-normal ff_magra text-center text-sm-start">
          Facilisi nec at ullamcorper consequat venenati <span className="d-block">cursus sagittis. Aliquet venenatis urna ege.
          </span>
        </p>
        <div className="d-flex flex-column justify-content-center justify-content-sm-start  flex-sm-row  align-items-center">
          <li className="mx-sm-4 position-relative curser z_3">
            <button className="fs_xsm  text-white btnHover my-2 my-sm-0  text-uppercase ff_highspeed border-0 py-3 fw-normal bg-transparent">
              Get Started
            </button>
            <img className="positionBackground" src={btnBg2} alt="btnBg2" />
          </li>
          <li className="ms-sm-5 position-relative curser z_3">
            <button className="fs_xsm  text-white btnHover my-2 my-sm-0  text-uppercase ff_highspeed border-0 py-3 fw-normal bg-transparent">
              Learn More
            </button>
            <img className="positionBackground" src={btnBg1} alt="btnBg1" />
          </li>
        </div>
        <a href="#down">
          <img
            className="position-absolute downImageSet"
            src={downBtn}
            alt="downBtn"
          />
        </a>
      </Container>
      <div className="bg_black position-absolute bottom_2 start-0 zn_1 w-100"></div>
    </div>
  );
};

export default HeroSection;

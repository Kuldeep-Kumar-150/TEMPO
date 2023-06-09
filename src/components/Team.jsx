import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";
import leftPosition from "../assets/img/svg/leftPosition.svg";
import rightPosition from "../assets/img/svg/rightPosition.svg";

const Team = () => {
  return (
    <section className="position-relative z_3 mt-5 mt-lg-0 pt-lg-0"id="team">
      <img className="position-absolute top-0 start-0 w_6 zn_1" src={leftPosition} alt="leftPosition" />
      <img className="position-absolute bottom-0 end-0 w_6 zn_1" src={rightPosition} alt="rightPosition" />
      <div className="blueBoxPosition position-absolute top-0 start-0 zn_1"></div>
      <div className="blueBoxPosition position-absolute bottom-0 end-0   zn_1"></div>
      <Container>
        <h3 className="text_shadow text-center text-white fw-normal ff_highspeed text_border1 position-relative z_2 pt-sm-5 pt-lg-0 fs_md">
          Team
        </h3>
        <Row className="py-5 justify-content-center">
          <Col className="my-2 my-lg-0" sm={6} lg={4} data-aos="zoom-in">
            <div className="cardBox position-relative ">
              <img className="w-100" src={image1} alt="image1" />
              <div className="position-absolute bottom-0 mb-4 start-50 transform_x_50">
                <h5 className="text-center text-white fs_2sm fw-normal ff_highspeed mb-0 ">
                  johhn doe
                </h5>
                <h6 className="mb-0 mt-1 text-center text-white fs_xsm fw-normal ff_magra">
                  (Co-founder & Designer)
                </h6>
              </div>
            </div>
          </Col>
          <Col className="my-2 my-lg-0" sm={6} lg={4} data-aos="zoom-in-up">
            <div className="cardBox position-relative ">
              <img className="w-100" src={image2} alt="image2" />
              <div className="position-absolute bottom-0 mb-4 start-50 transform_x_50">
                <h5 className="text-center text-white fs_2sm fw-normal ff_highspeed mb-0 ">
                  johhn doe
                </h5>
                <h6 className="mb-0 mt-1 text-center text-white fs_xsm fw-normal ff_magra">
                  (Co-founder & Designer)
                </h6>
              </div>
            </div>
          </Col>
          <Col className="my-2 my-lg-0" sm={6} lg={4} data-aos="zoom-in-down">

            <div className="cardBox position-relative ">
              <img className="w-100" src={image3} alt="image3" />
              <div className="position-absolute bottom-0 mb-4 start-50 transform_x_50">
                <h5 className="text-center text-white fs_2sm fw-normal ff_highspeed mb-0 ">
                  johhn doe
                </h5>
                <h6 className="mb-0 mt-1 text-center text-white fs_xsm fw-normal ff_magra">
                  (Co-founder & Designer)
                </h6>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;

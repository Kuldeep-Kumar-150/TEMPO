import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";

const Team = () => {
  return (
    <section>
      <Container>
        <h3 className="text-center text-white fs-normal ff_highspeed  pt-5">
          Team
        </h3>
        <Row className="py-5 justify-content-center">
          <Col className="my-2 my-lg-0" sm={6} lg={4}>
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
          <Col className="my-2 my-lg-0" sm={6} lg={4}>
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
          <Col className="my-2 my-lg-0 " sm={6} lg={4}>
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
          <div className="boxshadow"></div>
        </Row>
      </Container>
    </section>
  );
};

export default Team;

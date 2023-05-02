import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/img/png/image.png";
import leftPosition from "../assets/img/svg/leftPosition.svg";
import rightPosition from "../assets/img/svg/rightPosition.svg";
const Story = () => {
  return (
    <div
      id="down"
      className="position-relative overflow-hidden z_3 py-5 my-5 py-sm-5 my-sm-5 py-lg-5"
    >
      <img
        className="position-absolute bottom-0 start-0 w_6 zn_1"
        src={leftPosition}
        alt="leftPosition"
      />
      <img
        className="position-absolute top_10 end-0 w_6 zn_1"
        src={rightPosition}
        alt="rightPosition"
      />
      <div className="blueBoxPosition position-absolute bottom-0 start-0 zn_1"></div>
      <div className="blueBoxPosition position-absolute top_10 end-0   zn_1"></div>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="my-3 my-lg-0" md={8} lg={6}>
            <img className="w-100" src={image} alt="image" />
          </Col>
          <Col className="my-3 my-lg-0" lg={6}>
            <div className="ps-xl-5">
              <h4 className="fs_md mb-0 ff_highspeed fw-normal text-white text-center text-lg-start">
                Story
              </h4>
              <p className="ff_magra mb-0 text-white fw-normal fs_sm  mt-1 text-center text-lg-start">
                Facilisi nec at ullamcorper consequat venenatis cursus sagittis.
                Aliquet venenatis, urna egestas elementum ultricies convallis
                amet. Cursus sed porta imperdiet tellus lorem nam leo.
                Sollicitudin risus suspendisse urna sed arcu sit. Ullamcorper
                diam nulla nulla enim. Mi mauris, tortor pharetra in pretium
                rhoncus. Egestas sollicitudin quis ullamcorper bibendum at
                amet vel. Pellentesque congue est parturient egestas. Viverra
                leo non tincidunt sed sed quam in. Augue justo lacus, magna at
                ornare sed.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Story;

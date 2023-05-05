import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import line from "../assets/img/svg/line.svg";
import img1 from "../assets/img/svg/img1.svg";
import img2 from "../assets/img/svg/img2.svg";
import img3 from "../assets/img/svg/img3.svg";
import img4 from "../assets/img/svg/img4.svg";
import img5 from "../assets/img/svg/img5.svg";
import img6 from "../assets/img/svg/img6.svg";

const RoadMap = () => {
  return (
    <div className="roadmapIamge overflow-hidden" id="roadmap">
      <Container>
        <h4 className="fs_md mb-0 ff_highspeed fw-normal pt-5 pt-sm-0 text-center my-md-5 py-sm-5 text_shadow position-relative z_2 text-white">
          roadmap
        </h4>
        <Row className="position-relative z_3">
          <img className="position-absolute  lineSet1 d-none d-lg-block" src={line} alt="line" />
          <Col lg={2}>
            <h1 className="fs_40 fw-normal ff_highspeed text-white q1_bg py-2 mt-5 py-md-3 py-lg-4 text-center d-flex align-items-center justify-content-center"><span className="q1_text">Q1</span></h1>
          </Col>
          <Col className="pb-lg-5" lg={10}>
            <Row className="justify-content-between py-lg-5">
              <Col className="mt-5 pt-lg-5 position-relative mt-3" lg={4} xl={4}>
                <img
                  className="position-absolute cardImageSet"
                  src={img1}
                  alt="img1"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ms-5 ps-4 ps-sm-0">
                  Month 1
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Funding from initial mint put into Autonomous trading strategy
                  to build funds for the next year.
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Create Hangout for Community Voting to commence
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  First Community Vote: Shortlisting an Artist
                </p>
              </Col>
              <Col className="mt-5  pt-lg-5 position-relative mt-4 pt-4" lg={4} xl={4}>
                <img
                  className="position-absolute cardImageSet"
                  src={img2}
                  alt="img2"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ps-4 ms-5 ps-sm-0">
                  Month 2
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  First Community Vote: Shortlisting an Artist Ends
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Reach out to said Artists to short list them.
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Second Community Vote: Choose Artist
                </p>
              </Col>
              <Col className="mt-5  pt-lg-5 position-relative mt-4 pt-4" lg={4} xl={4}>
                <img
                  className="position-absolute cardImageSet"
                  src={img3}
                  alt="img3"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ps-4 ms-5 ps-sm-0">
                  Month 3
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Second Community Vote Ends
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Connect with Chosen Artist
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  First "Meme" NFT project is launched to fund marketplace.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className=" position-relative z_3">
          <img className="position-absolute  lineSet d-none d-lg-block" src={line} alt="line" />
          <Col lg={2}>
            <h1 className="fs_40 fw-normal ff_highspeed text-white q1_bg py-2 mt-5 py-md-3 py-lg-4 text-center d-flex align-items-center justify-content-center"><span className="q1_text">Q2</span></h1>
          </Col>
          <Col className="mt-lg-4 pt-lg-5" lg={10}>
            <Row className="justify-content-between">
              <Col className="mt-5 py-lg-5 position-relative" lg={4} xl={4}>
                <img
                  className="position-absolute cardImageSet"
                  src={img1}
                  alt="img1"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ms-5 ps-4 ps-sm-0">
                  Month 4
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Artist Provides Samples to be Voted on
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Market Place Dev Announcement
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Begin Construction of secondary Market
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Third Community Vote, Choosing the Art
                </p>
              </Col>
              <Col className="mt-5 py-lg-5 position-relative mt-4 pt-4" lg={4} xl={4}>
                <img
                  className="position-absolute cardImageSet"
                  src={img2}
                  alt="img2"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ms-5 ps-4 ps-sm-0">
                  Month 5
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Third Community Vote, Choosing the Art Ends
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Artist begins working on official DAO/PFP NFT
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Marketplace Testing
                </p>
              </Col>
              <Col className="mt-5 py-lg-5 position-relative mt-4 pt-4" lg={4} xl={4}>
                <img
                  className="position-absolute cardImageSet"
                  src={img3}
                  alt="img3"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ms-5 ps-4 ps-sm-0">
                  Month 6
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Launch of NFT Marketplace
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  6 Month Autonomous bot report to holders with proof of return
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Expected Mint for DAO/PFP NFT
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="py-5 pt-lg-3 pb-lg-0  position-relative z_3">
          <img className="position-absolute  lineSet3 d-none  d-lg-block" src={line} alt="line" />
          <Col lg={2}>
            <h1 className="fs_40 fw-normal ff_highspeed text-white q1_bg py-2 py-md-3 py-lg-4 q3_bg text-center d-flex align-items-center justify-content-center"><span className="q1_text">Q3</span></h1>
          </Col>
          <Col className="py-lg-5 my-xl-5" lg={10}>
            <Row className="justify-content-between">
              <Col className="mt-5 py-lg-5 position-relative" lg={4} xl={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img4}
                  alt="img4"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ps-4 ms-5 ps-sm-0">
                  Month 7
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Community Vote on Gen 2 NFT that offers Tokenomics
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Artist Commences work
                </p>
              </Col>
              <Col className="mt-5 py-lg-5 position-relative mt-4 pt-4" lg={4} xl={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img5}
                  alt="img5"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ps-4 ms-5 ps-sm-0">
                  Month 8
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Community Vote on Defi Developments
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ps-4 ms-5">
                  Announcement on Token release
                </p>
              </Col>
              <Col className="mt-5 py-lg-5 position-relative mt-4 pt-4" lg={4} xl={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img6}
                  alt="img6"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal ms-5 ps-4 ps-sm-0">
                  Month 9
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Comunity Vote on name of Token
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Preview of Gen 2 Art Released across media
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm ms-5 ps-4">
                  Dev Chosen to work alongside team focusing on Defi
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoadMap;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import line from "../assets/img/svg/line.svg";
import q1 from "../assets/img/svg/q1.svg";
import q2 from "../assets/img/svg/q2.svg";
import q3 from "../assets/img/svg/q3.svg";
import img1 from "../assets/img/svg/img1.svg";
import img2 from "../assets/img/svg/img2.svg";
import img3 from "../assets/img/svg/img3.svg";
import img4 from "../assets/img/svg/img4.svg";
import img5 from "../assets/img/svg/img5.svg";
import img6 from "../assets/img/svg/img6.svg";

const RoadMap = () => {
  return (
    <div className="roadmapIamge overflow-hidden">
      <Container>
        <h4 className="fs_md mb-0 ff_highspeed fw-normal text-center my-5 py-5 text_border3 position-relative z_2 text-white">
          roadmap
        </h4>
        <Row className="py-5  position-relative z_3">
          <img className="position-absolute  lineSet" src={line} alt="line" />
          <Col md={2}>
            <img src={q1} alt="q1" />
          </Col>
          <Col className="mt-5 pt-5" md={10}>
            <Row className="justify-content-between">
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img1}
                  alt="img1"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 1
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Funding from initial mint put into Autonomous trading strategy
                  to build funds for the next year.
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Create Hangout for Community Voting to commence
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  First Community Vote: Shortlisting an Artist
                </p>
              </Col>
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img2}
                  alt="img2"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 2
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  First Community Vote: Shortlisting an Artist Ends
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Reach out to said Artists to short list them.
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Second Community Vote: Choose Artist
                </p>
              </Col>
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img3}
                  alt="img3"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 3
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Second Community Vote Ends
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Connect with Chosen Artist
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  First "Meme" NFT project is launched to fund marketplace.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="py-5  position-relative z_3">
          <img className="position-absolute  lineSet" src={line} alt="line" />
          <Col md={2}>
            <img src={q2} alt="q2" />
          </Col>
          <Col className="mt-5 pt-5" md={10}>
            <Row className="justify-content-between">
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img1}
                  alt="img1"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 4
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Artist Provides Samples to be Voted on
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Market Place Dev Announcement
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Begin Construction of secondary Market
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Third Community Vote, Choosing the Art
                </p>
              </Col>
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img2}
                  alt="img2"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 5
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Third Community Vote, Choosing the Art Ends
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Artist begins working on official DAO/PFP NFT
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Marketplace Testing
                </p>
              </Col>
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img3}
                  alt="img3"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 6
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Launch of NFT Marketplace
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  6 Month Autonomous bot report to holders with proof of return
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Expected Mint for DAO/PFP NFT
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="py-5  position-relative z_3">
          <img className="position-absolute  lineSet3" src={line} alt="line" />
          <Col md={2}>
            <img src={q3} alt="q3" />
          </Col>
          <Col className="mt-5 pt-5" md={10}>
            <Row className="justify-content-between">
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img4}
                  alt="img4"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 7
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Community Vote on Gen 2 NFT that offers Tokenomics
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Artist Commences work
                </p>
              </Col>
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img5}
                  alt="img5"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 8
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Community Vote on Defi Developments
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Announcement on Token release
                </p>
              </Col>
              <Col className="mt-5 position-relative" md={3}>
                <img
                  className="position-absolute cardImageSet"
                  src={img6}
                  alt="img6"
                />
                <h3 className="fs_30 text-white  ff_highspeed fw-normal">
                  Month 9
                </h3>
                <p className="mb-0 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Comunity Vote on name of Token
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
                  Preview of Gen 2 Art Released across media
                </p>
                <p className="mb-0 mt-1 position-relative circle text-white fw-normal ff_magra fs_sm">
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

import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import sliderImg1 from '../assets/img/webp/man_img_1.webp'
import sliderImg2 from '../assets/img/webp/man_img_2.webp'
import sliderImg3 from '../assets/img/webp/man_img_3.webp'
const OurNft = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint:992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll:1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className=''>
            <Container className='overflow-hidden'>
                <h5 className='text-white text-center fs_md fw-normal ff_highspeed pb-4'>our nft</h5>
                <Row className=' align-items-end py-5 '>
                    <Slider {...settings} className='py-5 h_500 my-5'>
                        <Col sm={4}>
                            <div className="our_nft_cards position-relative mx-3">
                                <img className='position-absolute our_nft_img_1' src={sliderImg1} alt="sliderImg1" />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="our_nft_cards position-relative mx-3">
                                <img className='position-absolute our_nft_img_2' src={sliderImg2} alt="sliderImg2" />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="our_nft_cards position-relative mx-3">
                                <img className='position-absolute our_nft_img_3' src={sliderImg3} alt="sliderImg3" />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="our_nft_cards position-relative mx-3">
                                <img className='position-absolute our_nft_img_3' src={sliderImg3} alt="sliderImg3" />
                            </div>
                        </Col>
                    </Slider>
                </Row>
            </Container>
        </section>
    )
}

export default OurNft
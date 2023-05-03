import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import sliderImg1 from '../assets/img/webp/man_img_1.webp'
import sliderImg2 from '../assets/img/webp/man_img_2.webp'
import sliderImg3 from '../assets/img/webp/man_img_3.webp'
import nextBtn from '../assets/img/svg/next_btn.svg'
import prevBtn from '../assets/img/svg/prev_btn.svg'
const OurNft = () => {
    const first = useRef()
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 800,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
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
        <section className='py-5 mt-sm-5 mt-sm-0 py-sm-3 position-relative'>
            <img onClick={() => first.current.slickPrev()} className='crusor_pointer prev_btn d-none d-md-flex' width={50} height={50} src={prevBtn} alt="prevBtn" />
            <img onClick={() => first.current.slickNext()} className='crusor_pointer next_btn d-none d-md-flex' width={50} height={50} src={nextBtn} alt="nextBtn" />
            <Container className='overflow-hidden'>
                <h5 className='text-white text-center fs_md fw-normal ff_highspeed pb-4'>our nft</h5>
                <Row className=' align-items-end py-5 '>

                    <Slider {...settings} ref={first} className='py-5 h_500 my-5 '>
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
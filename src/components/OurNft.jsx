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
        centerPadding: -7,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
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
                    centerMode: false,
                    autoplay: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1,
                    centerPadding: -19
                }
            }
        ]
    };
    return (
        <section className='pt-5 mt-sm-5 mt-sm-0 py-sm-3 position-relative' id='nft'>
            <Container className='position-relative'>
                <h5 className='text-white text-center fs_md fw-normal ff_highspeed pt-xl-5 text_shadow overflow-hidden'>our nft</h5>
                <Slider {...settings} ref={first} className='overflow-hidden'>
                    <Col lg={4} cl
                    >
                        <div className="slider_cards mx-auto">
                            <img className="slider_img_1" src={sliderImg1} alt="man_img_1" />
                        </div>
                    </Col>
                    <Col lg={4} cl
                    >
                        <div className="slider_cards mx-auto">
                            <img className="slider_img_1" src={sliderImg2} alt="man_img_1" />
                        </div>
                    </Col>
                    <Col lg={4} cl
                    >
                        <div className="slider_cards mx-auto">
                            <img className="slider_img_2" src={sliderImg3} alt="man_img_1" />
                        </div>
                    </Col>
                    <Col lg={4} cl
                    >
                        <div className="slider_cards mx-auto">
                            <img className="slider_img_2" src={sliderImg3} alt="man_img_1" />
                        </div>
                    </Col>
                </Slider>
                <img onClick={() => first.current.slickPrev()} className='crusor_pointer prev_btn d-none d-md-flex' width={50} height={50} src={prevBtn} alt="prevBtn" />
                <img onClick={() => first.current.slickNext()} className='crusor_pointer next_btn d-none d-md-flex' width={50} height={50} src={nextBtn} alt="nextBtn" />
            </Container >
        </section >
    )
}

export default OurNft
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
        autoplaySpeed: 2000,
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
        <section className='pt-5 mt-sm-5 mt-sm-0 py-sm-3 position-relative' id='nft'>
            <img onClick={() => first.current.slickPrev()} className='crusor_pointer prev_btn d-none d-md-flex' width={50} height={50} src={prevBtn} alt="prevBtn" />
            <img onClick={() => first.current.slickNext()} className='crusor_pointer next_btn d-none d-md-flex' width={50} height={50} src={nextBtn} alt="nextBtn" />
            <Container className='overflow-hidden'>
                <h5 className='text-white text-center fs_md fw-normal ff_highspeed pb-5 pt-xl-5 text_shadow overflow-hidden'>our nft</h5>
                <Slider {...settings} ref={first} className='mt-5 pt-5'>
                    <Col sm={4}>
                        <div className="our_nft_cards cardShadow mx-3 mt-5">
                            <img className='w-100 slider_img_1' height={552} src={sliderImg1} alt="sliderimages" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="our_nft_cards cardShadow mx-3 mt-5">
                            <img className='w-100 slider_img_2' height={552} src={sliderImg2} alt="sliderimages" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="our_nft_cards cardShadow mx-3 mt-5">
                            <img className='w-100 slider_img_3' height={552} src={sliderImg3} alt="sliderimages" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="our_nft_cards cardShadow mx-3 mt-5">
                            <img className='w-100 slider_img_2' height={552} src={sliderImg2} alt="sliderimages" />
                        </div>
                    </Col>
                </Slider>

            </Container>
        </section>
    )
}

export default OurNft
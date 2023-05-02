import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import btnImg from '../assets/img/svg/mine_now_btn_img.svg'
import sliderImgGroup from '../assets/img/webp/slider_img_group.webp'
const About = () => {
    return (
        <section className='py-5 my-4'>
            <Container>
                <Row className='flex-column-reverse text-center text-lg-start flex-lg-row align-items-center'>
                    <Col lg={6}>
                        <h3 className='ff_highspeed text-white fs_md fw-normal mb-1 mt-4 mt-sm-5 mt-lg-0 bg-transparent'>About</h3>
                        <p className='text-white fs_sm fw-normal ff_magra'>Facilisi nec at ullamcorper consequat venenatis
                            cursus sagittis. Aliquet venenatis, urna egestas elementum ultricies convallis amet. Cursus sed porta
                            imperdiet tellus lorem nam leo. Sollicitudin risus suspendisse urna sed arcu sit. Ullamcorper diam nulla
                            nulla enim. Mi mauris, tortor pharetra in pretium rhoncus. Egestas sollicitudin quis ullamcorper bibendum
                            at amet vel. Pellentesque congue est parturient egestas.
                            Viverra leo non tincidunt sed sed quam in. Augue justo lacus, magna at ornare sed.</p>
                        <div className='mt-4 mt-lg-5 crusor_pointer d-inline-block mine_now_btn'>
                            <a href="#" className='text-uppercase ff_highspeed fw-normal text-white fs_xsm position-relative ps-5 pt-3'>mint now
                                <img className='position-absolute mine_now_btn_img' src={btnImg} alt="btnImg" />
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <img className='w-75' src={sliderImgGroup} alt="sliderImgGroup" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
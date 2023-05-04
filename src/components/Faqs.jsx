import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import pageLogo from '../assets/img/svg/nav_logo.svg'
import twitter from '../assets/img/svg/twitter.svg'
import instagram from '../assets/img/svg/instagram.svg'
import discord from '../assets/img/svg/discord.svg'
import footerCircleImg2 from '../assets/img/svg/footer_circle_2.svg'
const Faqs = () => {
    return (
        <section className="py-5 faqs_bg_img position-relative z_2 mt-xl-5">
            <Container>
                <h5 className='text-white text-center ff_highspeed fw-normal fs_md pt-xl-5 text_shadow'>faqs</h5>
                <div className="footer_position_box position-absolute zn_1"></div>
                <img className='footer_positions_circle_3 position-absolute w_6 zn_1' src={footerCircleImg2} alt="footerCircleImg" />
                <Accordion defaultActiveKey="0" className='mt-5'>
                    <Accordion.Item eventKey="0" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q1. What is a Cheeky Snails?</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-3 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q2. When is the launch date?
                                </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-4 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q3. What is the price ? </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-4 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q4. How many snails can I mint?
                                </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-4 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q5. When is reveal time?
                                </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-4 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q6. How many snails will ?

                                </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-4 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className='py-2'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_xl fw-normal ff_highspeed text-white mb-0'>Q7. What is the idea of this collection?

                                </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ps-0 ps-lg-3'>
                            <p className='text-white fs_sm fw-normal ff_magra ps-sm-3 ps-lg-5 ms-lg-4 acordion_blue_line position-relative pb-3'>Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec semper quam quam. <span className='d-lg-block'>Neque sapien, lectus nisi ut et.</span></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/**************FOOTER-LINKS*******************/}
                <div className="text-center d-flex flex-column align-items-center py-5 mt-5">
                    <img className='crusor_pointer' src={pageLogo} alt="pageLogo" />
                    <div className="d-flex mt-4">
                        <a href="#"><img className=' footer_icons' width={46} src={twitter} alt="links" /></a>
                        <a href="#" className='mx-3 footer_icons'><img width={46} src={instagram} alt="links" /></a>
                        <a href="#"><img className=' footer_icons' width={46} src={discord} alt="links" /></a>
                    </div>
                </div>
            </Container>
            <div className="footer_hr w-100"></div>
            <Container>
                <p className='text-center text_white fs_16 ff_magra fw-normal mb-0 pt-4'>Copyright@Tempo.com</p>
            </Container>
        </section>
    )
}

export default Faqs
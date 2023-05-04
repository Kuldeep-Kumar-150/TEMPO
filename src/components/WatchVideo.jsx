import React from 'react'
import { Container } from 'react-bootstrap'
import comingSoonImg from '../assets/img/webp/coming-soon-img.webp'
import videoIcon from '../assets/img/svg/video_icon.svg'
import leftPosition from "../assets/img/svg/leftPosition.svg";
import rightPosition from "../assets/img/svg/rightPosition.svg";
const WatchVideo = () => {
    return (
        <section className='py-5 mt-5 py-sm-0 my-sm-5 z_3 position-relative'>
            <img className="position-absolute top-0 start-0 w_6 zn_1" src={leftPosition} alt="leftPosition" />
            <img className="position-absolute bottom-0 end-0 w_6 zn_1" src={rightPosition} alt="rightPosition" />
            <div className="blueBoxPosition position-absolute top-0 start-0 zn_1"></div>
            <div className="blueBoxPosition position-absolute bottom-0 end-0   zn_1"></div>
            <Container className='py-sm-5'>
                <h6 className='fs_md text-white ff_highspeed fw-normal text-center text_shadow'>watch video</h6>
                <div className="position-relative mt-4 mt-sm-5">
                    <img className='w-100' src={comingSoonImg} alt="comingSoonImg" />
                    <img className='video_icon position-absolute crusor_pointer' src={videoIcon} alt="videoIcon" />
                </div>
            </Container>
        </section>
    )
}

export default WatchVideo
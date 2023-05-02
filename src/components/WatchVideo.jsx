import React from 'react'
import { Container } from 'react-bootstrap'
import comingSoonImg from '../assets/img/webp/coming-soon-img.webp'
import videoIcon from '../assets/img/svg/video_icon.svg'
const WatchVideo = () => {
    return (
        <section className='py-sm-5 my-sm-5'>
            <Container className='py-sm-5'>
                <h6 className='fs_md text-white ff_highspeed fw-normal text-center'>watch video</h6>
                <div className="position-relative mt-4">
                    <img className='w-100' src={comingSoonImg} alt="comingSoonImg" />
                    <img className='video_icon position-absolute crusor_pointer' src={videoIcon} alt="videoIcon" />
                </div>
            </Container>
        </section>
    )
}

export default WatchVideo
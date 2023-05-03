import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/nav_logo.svg'
const PreLoader = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".preloaderr").style.display = "none"
            document.body.classList.remove("overflow-hidden")
        }, 3000);
    }, [])

    return (
        <section>
            <Container>
                <div className='preloaderr'>
                    <div className='preloader position-fixed d-flex flex-column align-items-center justify-content-center start-0 top-0 bg-black vh-100 w-100'>
                        <img src={pageLogo} alt="pageLogo" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PreLoader
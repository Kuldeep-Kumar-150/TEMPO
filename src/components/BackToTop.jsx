import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import backToTop from '../assets/img/svg/back-to-top-.svg'
const BackToTop = () => {
    const [first, setfirst] = useState(true)
    const onTop = () => {
        document.documentElement.scrollTop = 0
    }
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 0) {
            setfirst(false)
        }
        else (
            setfirst(true)
        )
    })
    return (
        <section>
            <Container>
                <img onClick={() => onTop()} className={first ? "backtotop_btn crusor_pointer d-none" : "d-block backtotop_btn crusor_pointer"} src={backToTop} alt="backToTop" />
            </Container>
        </section>
    )
}

export default BackToTop
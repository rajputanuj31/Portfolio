import "./Hero.css"
import React from 'react'
import myimage from "../../asset/edited.png"
import twitter from "../../asset/twitter.png"
import insta from "../../asset/Insta.png"
import github from "../../asset/github-icon.png"
import linkedin from "../../asset/Linkedin.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import logo from "../../asset/logo4.png"
import logo2 from "../../asset/logo5.png"
import background from "../../asset/background5.jpg"

const Hero = () => {
    return (
        <div className="hero" id="Hero">
            <img src={background} className='background'alt="" />
            <div className="left">
                <div className="name">
                    <span>Hy! I Am</span>
                    <span>Anuj Rajput</span>
                    <span>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Vitae delectus et natus
                        necessitatibus amet ipsam itaque quia tenetur,
                        inventore deleniti. Deleniti, minus vel.</span>
                    <button className="btn btn-light">Hire me</button>
                    <div className="icons">
                        <a href="https://github.com/rajputanuj31" target=" ">
                            <img src={github} alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/anuj-rajput-054b69230/" target=" ">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                        <a href="https://www.instagram.com/_its.rjpt_anuj/?igshid=Y2M0YTlkZGNmOQ%3D%3D" target=" ">
                            <img src={insta} alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/iamRjptAnuj?t=sjByZgDasxqPysJUpUxZCg&s=08" target=" ">
                            <img src={twitter} alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={myimage} alt="" />
                <img src={logo2} alt="" />
                <div style={{ top: '-4%', left: '70%' }}>
                    <FloatingDiv image={logo} txt1='Web' txt2='Developer' />
                </div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '10rem',
                    width: '21rem',
                    left: '4rem'
                }}></div>
            </div>
        </div>
    )
}

export default Hero

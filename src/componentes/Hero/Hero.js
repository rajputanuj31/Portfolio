import "./Hero.css"
import React from 'react'
import myimage from "../../asset/my-image.png"
import twitter from "../../asset/twitter.png"
import insta from "../../asset/Insta.png"
import github from "../../asset/github-icon.png"
import linkedin from "../../asset/Linkedin.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import logo from "../../asset/logo4.png"
import logo2 from "../../asset/logo5.png"
import { motion } from "framer-motion"
import Textanimation from "../Animation/TextAnimation"

const Hero = () => {
    return (
        <div className="hero" id="Hero">
            {/* <img src={background} className='background' alt="" /> */}
            <div className="left">
                <div className="name">
                    <span>Hi! I Am</span>
                    <Textanimation/>
                    <span style={{fontSize:"25px"}}>Welcome to my portfolio showcasing <span style={{color:"#f4fa2b", fontWeight:"bold"}}>frontend</span> expertise 
                        and a journey 
                        into the transformative world of <span style={{color:"#f4fa2b", fontWeight:"bold"}}>blockchain...</span></span>
                        <a href="https://drive.google.com/file/d/1MnJxXd6BzwqSipyMxDuEsezraJoKo3ro/view?usp=sharing" target=" ">
                <button className='btn' style={{width: '8rem'}}>View Resume</button>
                </a>
                    <div className="icons">
                        <motion.a href="https://github.com/rajputanuj31" target=" "
                            initial={{ opacity: 0, scale: 0, x: 5 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={github} alt="github" />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/anuj-rajput-054b69230/" target=" "
                            initial={{ opacity: 0, scale: 0, x: 10 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.25 }}
                        >
                            <img src={linkedin} alt="linkedin" />
                        </motion.a>
                        <motion.a href="https://www.instagram.com/_its.rjpt_anuj/?igshid=Y2M0YTlkZGNmOQ%3D%3D" target=" "
                            initial={{ opacity: 0, scale: 0, x: 10 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.50 }}
                        >
                            <img src={insta} alt="Instagram" />
                        </motion.a>
                        <motion.a href="https://twitter.com/iamRjptAnuj?t=sjByZgDasxqPysJUpUxZCg&s=08" target=" "
                            initial={{ opacity: 0, scale: 0, x: 10 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.75 }}
                        >
                            <img src={twitter} alt="twitter" />
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={myimage} alt="" />
                <img src={logo2} alt="" />
                <div style={{ top: '-4%', left: '70%' }}>
                    <FloatingDiv image={logo} txt1='Web' txt2='Developer' />
                </div>
            </div>
        </div>
    )
}

export default Hero

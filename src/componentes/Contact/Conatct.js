import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import twitter from "../../asset/twitter.png"
import insta from "../../asset/Insta.png"
import github from "../../asset/github-icon.png"
import linkedin from "../../asset/Linkedin.png"
import background from "../../asset/background.jpg"

const Conatct = () => {
    const form = useRef();
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w7grqyl', 'template_ibpxfhj', form.current, 'nG8ZX0V-VyBxWb2Vy')
            .then((result) => {
                console.log(result.text);
                setName("");
                setEmail("");
                setMsg("");
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact' id='Contact' >
            <img src={background} className='background' alt="" />
            <div className='box'>
                <div className='center'>
                    <div className='c-left'>
                        <span>Get in touch</span>
                        <span>Contact me</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum fugiat provident ab tempore hic atque nam possimus mollitia
                            exercitationem, distinctio, rerum qui natus molestiae inventore!
                        </p>
                        <span>rajputanuj041@gmail.com</span>
                    </div>
                    <div className='c-right'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name='user_name' className='user' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" name='user_email' className='user' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <textarea name="message" className='user' placeholder='Message' value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                            <input type="submit" value="Send" className='btn'
                                style={{ width: "5rem", height: "2.5rem" }}
                            />
                            <span style={{ fontSize: "25px" }}>{done && "thanks for contacting me!"}</span>
                            <div
                                className='blur c-blur1'
                                style={{ background: "#e89de8;" }}
                            ></div>
                        </form>
                    </div>
                </div>
                <div className='social'>
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
    )
}

export default Conatct

import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'


const Skills = () => {
    return (
        <div className='skills' id='Skills'>
            {/* <img src={background} className='background' alt="" /> */}
            <motion.div className='awesome'
                initial={{ opacity: 0, scale: 0, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <span>My Awesome</span>
                <span>Skills</span>
                <span style={{ fontSize: "20px" }}>
                    Here, I display my skills in front-end development by creating
                    engaging <br /> blockchain interfaces and coding dynamic websites.
                </span>
                <div className='blur blur-1' style={{ background: '#ABF1FF94' }}></div>
            </motion.div>
            <motion.div className='cards'
                initial={{ opacity: 0, scale: 0, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="card" title='NextJs'>NextJs</div>
                <div className="card" title='React'>ReactJs</div>
                <div className="card" title='TypeScript'>TypeScript</div>
                <div className="card" title='JavaScript'>JavaScript</div>
                <div className="card" title='Rust'>Rust</div>
                <div className="card" title='C++'>C++</div>
                <div className="card" title='MongoDB'>MongoDB</div>
                <div className="card" title='Node.js'>Node.js</div>
                <div className="card" title='Express.js'>Express.js</div>
                <div className="card" title='SQL Database'>MySQL</div>
                <div className="card" title='Git'>Git</div>
                <div className="card" title='Python'>Python</div>
                <div className="card" title='HTML'>HTML</div>
                <div className="card" title='CSS'>CSS</div>
                <div className="card" title='Cypress'>Cypress</div>
                <div className="card" title='Joomla'>Joomla</div>
            </motion.div>
        </div>
    )
}

export default Skills

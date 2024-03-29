import React from 'react'
import "./Skills.css"
import Card from '../Card/Card'
import html from "../../asset/Html.png"
import css from "../../asset/css.png"
import js from "../../asset/js.png"
import mongo from "../../asset/mongo.png"
import node from "../../asset/node.png"
import express from "../../asset/express.png"
import react from "../../asset/react.png"
import git from "../../asset/git.png"
import cy from "../../asset/cy.png"
import c from "../../asset/c.png"
import cpp from "../../asset/c++.png"
import python from "../../asset/python.png"
import sql from "../../asset/sql.png"
import ts from "../../asset/ts.png"
import joomla from "../../asset/joomla.png"
import { motion } from 'framer-motion'


const Projects = () => {
    return (
        <div className='skills' id='Skills' 
        >
            {/* <img src={background} className='background' alt="" /> */}
            <motion.div className='awesome'
            initial = {{opacity:0,scale:0 ,x:-50}}
            whileInView={{opacity:1,scale:1,x:0}}
            transition={{duration:0.4}}
            >
             <span>My Awesome</span>
             <span>Skills</span>
             <span style={{fontSize:"20px"}}>Here, I display my skills in front-end development by creating
              engaging <br/>blockchain interfaces and 
             coding dynamic websites.</span>
                <div className='blur blur-1' style={{background: '#ABF1FF94'}}></div>
            </motion.div>
            <motion.div className='cards'
            initial = {{opacity:0,scale:0 ,x:50}}
            whileInView={{opacity:1,scale:1,x:0}}
            transition={{duration:0.8}}
            >
                <div title='HTML'>
                    <Card
                    image={html}
                    />
                </div>
                <div title='CSS'>
                    <Card
                    image={css}
                    />
                </div>
                <div title='JavaScript'>
                    <Card
                    image={js}
                    />
                </div>
                <div title='TypeScript'>
                    <Card
                    image={ts}
                    />
                </div>
                <div title='MongoDB'>
                    <Card
                    image={mongo}
                    />
                </div>
                <div title='Node js'>
                    <Card
                    image={node}
                    />
                </div>
                <div title='Express js'>
                    <Card
                    image={express}
                    />
                </div>
                <div title='React'>
                    <Card
                    image={react}
                    />
                </div>
                <div title='Git'>
                    <Card
                    image={git}
                    />
                </div>
                <div title='Cypress'>
                    <Card
                    image={cy}
                    />
                </div>
                <div title='C'>
                    <Card
                    image={c}
                    />
                </div>
                <div title='C++'>
                    <Card
                    image={cpp}
                    />
                </div>
                <div title='Python'>
                    <Card
                    image={python}
                    />
                </div>
                <div title='Sql Database'>
                    <Card
                    image={sql}
                    />
                </div>
                <div title='Joomla'>
                    <Card
                    image={joomla}
                    />
                </div>

            </motion.div>
            
        </div>
    )
}

export default Projects

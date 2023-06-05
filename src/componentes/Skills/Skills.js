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


const Projects = () => {
    return (
        <div className='skills' id='Skills' >
            {/* <img src={background} className='background' alt="" /> */}
            <div className='awesome'>
             <span>My Awesome</span>
             <span>Skills</span>
             <span>Lorem, ipsum dolor sit 
                amet consectetur adipisicing elit. Quis, facilis ullam! 
                <br/>
                Saepe nulla in reprehenderit.</span>
                <button className='btn' style={{width: '8rem'}}>Download CV</button>
                <div className='blur blur-1' style={{background: '#ABF1FF94'}}></div>
            </div>
            <div className='cards'>
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

            </div>
            
        </div>
    )
}

export default Projects

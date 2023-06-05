import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Conatct from '../Contact/Conatct'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills/>
            <Projects/>
            <Conatct/>
        </div>
    )
}

export default Home

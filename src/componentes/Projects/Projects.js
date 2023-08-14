import React from 'react'
import "./Projects.css"
import details from '../../Details.js'

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <div className='recent-project'>
        <span>Recent Projects</span>
      </div>
      {details.map((item,index)=>{
        return (
          <div className='pr'>
            <div className='pr-left' key={index}>
              <ul>
                <h1 style={{color:"white",paddingBottom:"1rem"}}>{item.name}</h1>
                <li>{item.subheading}</li>
                <li>{item.techstack}</li>
                <li><a href={item.github} style={{color:"white",textDecoration:"Underline"}}>Github</a></li>
                <li><a href={item.Demo} style={{color:"white",textDecoration:"Underline"}}>Demo</a></li>
              </ul>
              </div>
              <div className='pr-right' key={index}>
              <img src={item.image} alt="" />
              </div>
          </div>
        )
      }) }
    </div>
  )
}

export default Projects

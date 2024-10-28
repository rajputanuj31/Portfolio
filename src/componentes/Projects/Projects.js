import React from 'react';
import "./Projects.css";
import details from '../../Details.js';

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <div className='recent-project'>
        <span>Recent Projects</span>
      </div>
      <div className="project-grid">
        {details.map((item, index) => (
          <div className='card-p' key={index}>
            <div className="card-header">
              <h1 className='project-title'>{item.name}</h1>
              {item.timePeriod && <p className='project-time-period'>{item.timePeriod}</p>} {/* Added time period just below title */}
            </div>
            <div className='card-body'>
              {item.subheading && <p className='project-subheading'>{item.subheading}</p>}
              {item.techstack && (
                <div className='project-techstack'>
                  {item.techstack.map((tech, index) => (
                    <span className='tech-item' key={index}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
            <div className='card-footer'>
              <div className='project-links'>
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i> GitHub
                  </a>
                )}
                {item.Demo && (
                  <a href={item.Demo} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-external-link"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

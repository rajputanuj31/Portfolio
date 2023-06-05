import React from 'react'
import "./Projects.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../../asset/project1.jpg"
import project2 from "../../asset/project2.jpg"
import project3 from "../../asset/project3.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <div className='recent-project'>
        <span>Recent Projects</span>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='projects-slider'
      >
        <SwiperSlide>
          <div className='tech'>
          <span >Html</span>
          <span >Css</span>
          </div>
          <img src={project1} alt="" />
          <div className='buttons'>
            <button className='btn btn-light' style={{ marginLeft: "6rem" }} >Github</button>
            <button className='btn btn-light'>Demo</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='tech'>
          <span >Html</span>
          <span >Css</span>
          <span >Javascript</span>
          </div>
          <img src={project3} alt="" />
          <div className='buttons'>
            <button className='btn btn-light' style={{ marginLeft: "6rem" }} >Github</button>
            <button className='btn btn-light'>Demo</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='tech'>
          <span >Html</span>
          <span >Css</span>
          <span >React</span>
          </div>
          <img src={project2} alt="" />
          <div className='buttons'>
            <button className='btn btn-light' style={{ marginLeft: "6rem" }} >Github</button>
            <button className='btn btn-light'>Demo</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects

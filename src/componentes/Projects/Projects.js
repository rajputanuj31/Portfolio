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
            <span >Wine Shop</span>
          </div>
          <img src={project1} alt="" />
          <div className='details'>
            <div class="text">
              <li>Simle Frontend</li>
              <li>Html, Css</li>
              <li>Responsive</li>
            </div>
          </div>
          <div className='buttons'>
            <a href="https://github.com/rajputanuj31/madirashop" target=" ">
              <button className='btn btn-light' style={{ marginLeft: "6rem" }} >Github</button>
            </a>
            <a href="https://rajputanuj31.github.io/madirashop/" target=" ">
              <button className='btn btn-light'>Demo</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='tech'>
            <span >Music App</span>
          </div>
          <img src={project3} alt="" />
          <div className='details'>
            <div class="text">
              <li>Fully Functioning</li>
              <li>Html, Css, Javascript</li>
              <li>Responsive</li>
              <li>Song search function</li>
            </div>
          </div>
          <div className='buttons'>
            <button className='btn btn-light' style={{ marginLeft: "6rem" }} >Github</button>
            <button className='btn btn-light'>Demo</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='tech'>
            <span >To do App</span>
          </div>
          <img src={project2} alt="" />
          <div className='details'>
            <div class="text">
              <li>Fully Functioning</li>
              <li>Html, Css, React</li>
              <li>Responsive</li>
              <li>Use Local Storage</li>
            </div>
          </div>
          <div className='buttons'>
            <a href="https://github.com/rajputanuj31/Daily_Goals" target=" ">
              <button className='btn btn-light' style={{ marginLeft: "6rem" }} >Github</button>
            </a>
            <a href="https://rajputanuj31.github.io/Daily_Goals/" target=" ">
              <button className='btn btn-light'>Demo</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects

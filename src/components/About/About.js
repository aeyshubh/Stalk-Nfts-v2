import React from 'react'
import bg2 from '../../assets/svg (4).png'
import './aboutStyle.css'
import krishn from '../../assets/krishn.jfif'
import shub from '../../assets/shubham.jfif'
import sid from '../../assets/sidhdharth.jfif'

const About = () => {
  return (
    <div className='about-container'>
      <img src={bg2} alt="" className='bg2'/>
      <div className='members'>
        <img src={sid} alt="" />
      </div>
      <div className='members'>
        <img src={shub} alt="" />
      </div>
      <div className='members'>
        <img src={krishn} alt="" />
      </div>
    </div>
  )
}

export default About

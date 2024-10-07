import React from 'react'
import './About.css'
import about_img from '../../assets/bg_color.png'
import play_icon from '../../assets/logo_bl.png'

function About() {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>About Judiciary of Tanzania</h3>
        <h2>Judiciary of Tanzania</h2>
        <h4>Mission</h4>
        <p>the little brown fox...........</p>
        <h4>Vision</h4>
        <p>the little brown fox...........</p>
      </div>
    </div>
  )
}

export default About

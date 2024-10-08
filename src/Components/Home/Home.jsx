// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import news1 from '../../assets/bg0_2.png'
import news2 from '../../assets/bg0_9.png'
import news3 from '../../assets/bg0_5.png'
import home_icon from '../../assets/logo_bl.png'

const Home = () => {
  return (
    <div className='news'>
        <div  className='new'>
            <img src={news1} alt="" />
            <div className='caption'>
               <img src={home_icon} alt="" /> 
               <p>Click for more</p>
            </div>
        </div>
        <div  className='new'>
            <img src={news2} alt="" />
            <div className='caption'>
               <img src={home_icon} alt="" /> 
               <p>Click for more</p>
            </div>
        </div>
        <div  className='new'>
            <img src={news3} alt="" />
            <div className='caption'>
               <img src={home_icon} alt="" /> 
               <p>Click for more</p>
            </div>
        </div>
        <div  className='new'>
            <img src={news3} alt="" />
            <div className='caption'>
               <img src={home_icon} alt="" /> 
               <p>Click for more</p>
            </div>
        </div>
        <div  className='new'>
            <img src={news3} alt="" />
            <div className='caption'>
               <img src={home_icon} alt="" /> 
               <p>Click for more</p>
            </div>
        </div>
      
    </div>
  )
}

export default Home

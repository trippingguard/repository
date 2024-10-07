// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo_bl.png'


const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><button className='btn'>Home</button></li>
        <li><button className='btn'>About Us</button></li>
        <li><button className='btn'>Causelist</button></li>
        <li><button className='btn'>Publications</button></li>
        <li><button className='btn'>Legislation</button></li>
        <li><button className='btn'>Judgment & Rulling</button></li>
        <li><button className='btn'>Forms</button></li>
        <li><button className='btn'>Public Notice</button></li>
      </ul>
      <img src={logo} alt="" className='logo'/>
    </nav>
  )
}

export default Navbar

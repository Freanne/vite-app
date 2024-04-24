import React from 'react'
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
      <nav className='navbar'>
        <img src={logo} alt="" className='nav-logo' />
        <h3 className='nav-text'>ReactFacts</h3 >
        <h4 className='nav-title'>React Course - Project 1</h4>
      </nav>
  )
}

export default Navbar

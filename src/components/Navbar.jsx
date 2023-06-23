import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>About me</h6>
          </Link>
          <Link className='link' to="/?cat=science">
            <h6>My works</h6>
          </Link>
          <Link className='link' to="/?cat=food">
            <h6>Blog</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>Contact</h6>
          </Link>
          <span>Jose</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo-olaf.png"
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const Logout = () => {
    logout()
  }
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/?CategoryId=1">
            <h6>About me</h6>
          </Link>
          <Link className='link' to="/?CategoryId=2">
            <h6>My works</h6>
          </Link>
          <Link className='link' to="/?cat=food">
            <h6>Blog</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>Contact</h6>
          </Link>
          <span>{currentUser?.UserName}</span>
          {currentUser ? (
            <span onClick={Logout}>Logout</span>
          ) : (
            <Link className='link' to="/login">Login</Link>
          )}
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

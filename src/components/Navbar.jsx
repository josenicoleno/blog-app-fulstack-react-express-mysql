import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../img/logo-olaf.png"
import { AuthContext } from '../context/authContext'
import swal from 'sweetalert'

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const Logout = () => {
    swal({
      title: 'Log out',
      text: "Are you sure that log out?",
      buttons: ["No", "Yes"]
    }).then(res => {
      console.log(res)
      if (res) {
        logout()
        navigate('/')
      }
    })
  }
  const navigate = useNavigate()

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
            <>
              <span onClick={Logout}>Logout</span>
              <span className='write'>
                <Link className='link' to="/write">Write</Link>
              </span>
            </>
          ) : (
            <Link className='link' to="/login">Login</Link>
          )}

        </div>
      </div>
    </div>
  )
}

export default Navbar

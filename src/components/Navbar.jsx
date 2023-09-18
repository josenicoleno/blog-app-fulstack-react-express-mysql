import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../img/logo.png"
import { AuthContext } from '../context/authContext'
import swal from 'sweetalert'
import axios from 'axios'

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const [menu, setMenu] = useState([]);

  const Logout = () => {
    swal({
      title: 'Log out',
      text: "Are you sure that log out?",
      buttons: ["No", "Yes"]
    }).then(res => {
      if (res) {
        logout()
        navigate('/')
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/menu`)
        setMenu(res.data)
      } catch (err) {
      }
    }
    fetchData();
  }, [])
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
          {
            menu.map(menu => (
              <Link className='link' to={menu.Link} key={menu.Id}>
                <h6>{menu.Title}</h6>
              </Link>
            )
            )
          }
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

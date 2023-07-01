import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    useremail: "",
    userpassword: ""
  })
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs)
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }
  /* console.log(inputs) */
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="email" placeholder='email' name='useremail' onChange={handleChange} />
        <input required type="password" placeholder='password' name='userpassword' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}
export default Register

import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
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
      await axios.post("http://localhost:8800/api/auth/users", inputs)
      const result = await axios.post("http://localhost:8800/api/auth/login", inputs)
      if (result.status === 200)
        console.log(result.data.token)
        // document.cookie = `access_token=${result?.data.token};`
      /* navigate("/") */
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <input type="password" placeholder='password' name='userpassword' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login

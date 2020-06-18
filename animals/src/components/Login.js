import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

export default function Login(props) {
  // How can we log in? What do we need to do?
  const [login, setLogin] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    event.preventDefault()
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axiosWithAuth()
      .post('login', login)
      .then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.payload)
        props.history.push('/creatures')
      })
      .catch((error) => console.log(`Login error: ${error.response}`))
  }

  return (
    <div>
      <h1>Welcome to the Safari App!</h1>
      <h2>I can't show you more until you log in. Please build out a login.</h2>
      <form onSubmit={handleSubmit} className="forms-style">
        <input
          type="text"
          name="username"
          label="username"
          placeholder="username"
          value={props.username}
          onChange={handleChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          label="password"
          placeholder="password"
          value={props.password}
          onChange={handleChange}
          className="input"
        />
        <button className="start">Start</button>
      </form>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
      home page
        <Link to="/signup">Go to Signup</Link>
            <br />
        <Link to="/login">Go to Login</Link>
           <br />
        <Link to="/about">Go to About</Link>
        <br />
        <Link to="/otp">Go to Otp</Link>
    </div>
  )
}

export default Home

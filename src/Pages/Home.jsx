import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      home page
        <Link to="/signup">Go to Signup</Link>
            <br />
        <Link to="/login">Go to Login</Link>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
  <div className="hero">
    <div className="text-center hero-content">
        <div className="max-w-lg">
            <h1 className="text-8xl font-bold mb-8">
                oops!
            </h1>
            <p className="text-2xl mb-8">
                404-page not found!
            </p>
            <Link to='/' className="btn btn-primary btn-lg">
                <FaHome className="mr-2"/>
                    Back To Home
            </Link>
        </div>
    </div>
  </div>
  )
}

export default NotFound
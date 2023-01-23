import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className=' center flex-column'>
      <h1>404: Page Not Found!</h1>
      <Link className='btn btn-primary btn-lg' to='/'>
        Back to home
      </Link>
    </div>
  )
}

export default NotFound

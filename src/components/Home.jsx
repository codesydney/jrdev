import { Link } from "react-router-dom"
function Home() {
  return (
    <div className=' center flex-column'>
      <h1>Home</h1>
      <Link to='/signup' className='btn btn-primary btn-lg'>
        Sign Up
      </Link>
    </div>
  )
}

export default Home

import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/UserInfo"
function UserDashboard() {
  const { user, setUser, setState } = useContext(UserContext)
  const handleClick = () => {
    setState()
    setUser()
  }
  return (
    <div className='p-xl-5'>
      <div className=' bg-light p-4 shadow border d-flex align-items-center justify-content-between mb-5'>
        <div className='d-flex align-items-center gap-3'>
          <img className='rounded-circle' src={user.photo} alt='' />
          <p className='m-0 fs-3'>{user.firstName + " " + user.lastName}</p>
        </div>

        <Link
          onClick={handleClick}
          to='/'
          className='btn btn-warning px-5 py-2 fw-bold'
        >
          Log Out
        </Link>
      </div>
      <div>
        <h3>Contact:</h3>
        <div className='d-flex gap-2 align-content-center'>
          <p className='fs-4'>Email:</p>
          <a
            className='m-0 text-center fs-5 fw-bold text-black'
            href={`mailto: ${user.email}`}
          >
            {user.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard

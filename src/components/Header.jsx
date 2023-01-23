import { Link } from "react-router-dom"
function Header() {
  return (
    <nav
      className='navbar navbar-expand navbar-dark bg-dark'
      aria-label='Second navbar example'
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Jr Dev
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample02'
          aria-controls='navbarsExample02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample02'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/signin'
              >
                Sign In
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to='/signup'>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

{
  /* <Link to='/signin'>signin</Link>
      <Link to='/signup'>signup</Link> */
}
export default Header

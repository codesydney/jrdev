import { Link } from "react-router-dom"
import logo from "./resources/codesydenylogo.png"
function Header() {
  return (
    <nav
      className='navbar navbar-expand  bg-light'
      aria-label='Second navbar example'
    >
      <div className='container-fluid'>
        <Link className=' navbar-brand d-flex justify-content ' to='/'>
          <img className='logo' src={logo} alt='Code.Sydeny Logo' />
          <div className='display-flex ms-1'>
            <p className='large m-0 text-end'>JrDEV</p>
            <p className='fs-7 m-0 text-end'>By Code.Sydney</p>
          </div>
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
              <Link className='nav-link active' to='/'>
                Home
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

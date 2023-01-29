import { Link } from "react-router-dom"

function AccountType() {
  return (
    <div className='container cntr mt-5'>
      <div className='row gap-5'>
        <div className='col centr  py-8 px-4 border'>
          <h1 className='txt-blue'>Jr Developer</h1>
          <Link
            to='/signup'
            className='btn button-blue btn-lg shadow button rounded-pill px-2'
          >
            Sign Up
          </Link>
        </div>
        <div className='col centr  py-8 px-4 border'>
          <h1 className='txt-blue'>Recruiter</h1>
          <Link
            to='/signup'
            className=' btn button button-blue btn-lg shadow rounded-pill px-2'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AccountType

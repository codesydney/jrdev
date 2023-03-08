import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserInfo"
function RecruiterSignUp() {
  const { setIsLoggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [city, setCity] = useState()
  const [number, setNumber] = useState("")
  const [error, setError] = useState()
  const [valid, setValid] = useState()
  const [login, setLogin] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleLastName = (e) => {
    setLastname(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleError = (respS, error) => {
    if (respS === "success") {
      setError("success")
      console.log("done")
      setValid(true)
      setIsLoggedIn(true)
      navigate("/userdashboard")
    } else {
      setError(respS)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setError("Password do not match!")
    } else {
      const data = {
        email,
        password,
        firstName: name,
        lastName,
        city,
        phone: number,
      }
      handlePost(data)
    }
  }

  const handlePost = (user) => {
    const url = "http://localhost:3005/api/user/signup"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        console.log(result)
        result.json().then((resp) => {
          handleError(resp.status, resp.message)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='text-center center'>
      <div className='signin'>
        <div className='form-signin w-100 m-auto gap-3'>
          <form onSubmit={handleSubmit}>
            <h1 className='h3 mb-3 fw-normal'>Please Sign Up</h1>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control rounded-0 rounded-top'
                id='floatingInput'
                placeholder='First Name'
                onChange={handleName}
                value={name}
              />
              <label htmlFor='floatingInput'>First Name</label>
            </div>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control rounded-0 '
                id='floatingInput'
                placeholder='LastName'
                onChange={handleLastName}
                value={lastName}
              />
              <label htmlFor='floatingInput'>Last Name</label>
            </div>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control rounded-0 '
                id='floatingInput'
                placeholder='name@example.com'
                onChange={handleEmail}
                value={email}
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control rounded-0'
                id='floatingPassword'
                placeholder='Password'
                onChange={handlePassword}
                value={password}
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control rounded-0   '
                id='floatingPassword'
                placeholder='Confirm Password'
                onChange={handlePasswordConfirm}
                value={passwordConfirm}
              />
              <label htmlFor='floatingPassword'>Confirm Password</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control rounded-0   '
                id='floatingPassword'
                placeholder='Confirm Password'
                onChange={handleCity}
                value={city}
              />
              <label htmlFor='floatingPassword'>City</label>
            </div>
            <div className='form-floating mb-5'>
              <input
                type='number'
                className='form-control rounded-0 rounded-bottom shadow mb-1'
                id='floatingPassword'
                placeholder='Confirm Password'
                onChange={handleNumber}
                value={number}
              />
              <label htmlFor='floatingPassword'>Phone</label>
              <p className={valid ? "text-success" : "text-danger"}>
                {error} {login && <Link to='/signin'>Sign In</Link>}
              </p>
            </div>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RecruiterSignUp

import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserInfo"
function RecruiterSignUp() {
  const { setState } = useContext(UserContext)
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState()
  const [valid, setValid] = useState()
  const [login, setLogin] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
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
  const handleClear = () => {
    setName("")
    setEmail("")
    setPassword("")
    setPasswordConfirm("")
  }
  const handleError = (respS, resp, error) => {
    console.log(resp)
    if (respS === "success") {
      handleClear()
      setError("success")
      console.log("done")
      setValid(true)
      setState(true)
      navigate("/userdashboard")
    } else {
      console.log("bad")
      setPassword("")
      setPasswordConfirm("")
      handleErrorType(error)
    }
  }
  const handleErrorType = (error) => {
    if (error !== "Invalid input data. Passwords must match") {
      let serror = error.substring(0, 18)
      console.log(serror)
      if (serror === "Invalid input data") {
        setError("Password too short. Minimum 8!")
      } else if (serror === "E11000 duplicate k") {
        setError("User Already Exists.")
        setLogin(true)
      }
    } else {
      setError(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, password, passwordConfirm }
    handlePost(data)
  }

  const handlePost = (user) => {
    const url = "https://jrdevau.herokuapp.com/api/v1/users/signUp"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((resp) => {
        handleError(resp.status, resp, resp.message)
      })
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
                placeholder='Name'
                onChange={handleName}
                value={name}
              />
              <label htmlFor='floatingInput'>Name</label>
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
            <div className='form-floating mb-5'>
              <input
                type='password'
                className='form-control rounded-0 rounded-bottom shadow mb-1'
                id='floatingPassword'
                placeholder='Confirm Password'
                onChange={handlePasswordConfirm}
                value={passwordConfirm}
              />
              <label htmlFor='floatingPassword'>Confirm Password</label>
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

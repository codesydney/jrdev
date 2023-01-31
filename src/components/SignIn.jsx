import axios from "axios"
import { useContext } from "react"
import UserContext from "../context/UserInfo"
import { useNavigate } from "react-router-dom"

import { useState } from "react"
function SignIn() {
  const navigate = useNavigate()
  const { setState } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { email, password }
    handlePost(data)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (info, JWT, userId) => {
    console.log(JWT)
    console.log(userId)
    if (info === "success") {
      setSuccessMessage("success")
      setSuccess(true)
      setState(true)
      navigate("/userdashboard")
    } else {
      setSuccessMessage("Invalid Email or Password")
      setSuccess(false)
    }
  }

  const handlePost = async (user) => {
    // To do (use axios api to check if user input is valid)
    axios({
      method: "post",
      url: "https://jrdevau.herokuapp.com/api/v1/users/login",
      data: {
        email,
        password,
      },
    })
      .then(function (response) {
        handleLogin(
          response.data.status,
          response.data.data.token,
          response.data.data.user.id
        )
      })
      .catch(function (error) {
        handleLogin()
      })
  }

  return (
    <div className='text-center center'>
      <div className='signin'>
        <div className='form-signin w-100 m-auto gap-3'>
          <form onSubmit={handleSubmit}>
            <h1 className='h3 mb-3 fw-normal'>Please Sign In</h1>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control rounded-0 rounded-top '
                id='floatingInput'
                placeholder='name@example.com'
                onChange={handleEmail}
                value={email}
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className='form-floating mb-4'>
              <input
                type='password'
                className='form-control rounded-0 rounded-bottom'
                id='floatingPassword'
                placeholder='Password'
                onChange={handlePassword}
                value={password}
              />
              <label htmlFor='floatingPassword'>Password</label>
              <p className={success ? "text-success" : "text-danger"}>
                {successMessage}
              </p>
            </div>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn

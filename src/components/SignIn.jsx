import { useState } from "react"
function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let success = ""

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { email, password }
    handlePost(data)
    console.log(data)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (info) => {
    console.log("ok", info)
    if (info === "success") {
      console.log("success")
    } else {
      console.log("invalid")
    }
  }

  const handlePost = async (user) => {
    const url = "https://jrdevau.herokuapp.com/api/v1/users/login"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        result.json().then((resp) => {
          success = resp.status
          handleLogin(success)
        })
      })
      .catch((error) => {
        console.log(error)
        handleLogin(success)
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

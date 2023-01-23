import { useContext } from "react"
import UserAccountContext from "../context/userAccountContext"
function SignUp() {
  const {
    name,
    email,
    password,
    passwordConfirm,
    error,
    handleName,
    handleEmail,
    handlePassword,
    handlePasswordConfirm,
    handleError,
    setError,
    valid,
  } = useContext(UserAccountContext)

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
        console.log(resp.message)
        setError(resp.message)
        handleError()
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
              <p className={valid ? "text-success" : "text-danger"}>{error}</p>
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

export default SignUp

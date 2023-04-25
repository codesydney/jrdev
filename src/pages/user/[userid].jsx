import { useRouter } from 'next/router'
import { useState } from 'react'
import { Formik } from 'formik'

const User = () => {
  // const router = useRouter()
  // const { userid } = router.query
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [resume, setResume] = useState('')

  const handleSubmit = () => {
    console.log(name, email, phone, resume)
  }

  return (
    <div>
      <div>
        <h1>Input your name</h1>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <h1>Input your email</h1>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        <h1>Input your phone</h1>
        <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)} />
        <h1>Input your resume</h1>
        <input type="text" name="resume" onChange={(e) => setResume(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default User

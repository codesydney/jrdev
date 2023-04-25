import { useState } from 'react'
import { useSession } from 'next-auth/react'
import supabase from '@/lib/supabaseClient'
import jwt from 'jsonwebtoken'

const Roleselect = () => {
  const [role, setRole] = useState('')
  const { data: session, status } = useSession()

  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const supabaseAccessToken = session.supabaseAccessToken
  const decodedToken = jwt.decode(supabaseAccessToken)
  const userId = decodedToken.sub

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data, error } = await supabase.from('users').update({ role }).eq('id', userId)
      if (error) throw error
      if (data) console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select your role:
        <select value={role} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="applicant">Applicant</option>
          <option value="recruiter">Recruiter</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  )
}

export default Roleselect

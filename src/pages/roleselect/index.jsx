import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import supabase from '@/lib/supabaseClient'

const Roleselect = () => {
  const [role, setRole] = useState('applicant')
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleChange = (event) => {
    setRole(event.target.value)
  }
  // const supabaseAccessToken = session.supabaseAccessToken
  // const decodedToken = jwt.decode(supabaseAccessToken)
  // const userId = decodedToken.sub

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ role })
        .eq('id', session.user.id)
      if (error) throw error
      router.push('/')
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
      <button type="submit">Next</button>
    </form>
  )
}

export default Roleselect

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

const Roleselect = () => {
  const [role, setRole] = useState('')

  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { data, error } = await supabase.from('users').update({ role: role }).eq('id', user.id)
    if (error) console.log('error', error)
    if (data) console.log('data', data)
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

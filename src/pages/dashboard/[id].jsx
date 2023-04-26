import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Roleselect from '@/components/roleselect/Roleselect'
import supabase from '@/lib/supabaseClient'

const Dashboard = ({ role }) => {
  const { data: session, status } = useSession()
  console.log('status: ', status)
  console.log('role: ', role)

  console.log('session:', session)

  if (status === 'unauthenticated') {
    return <div>Access denied. Please log in. Redirect to login page then.</div>
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (role === null) {
    return <Roleselect />
  }

  return (
    <>
      {role === 'applicant' && <div>applicant dashboard</div>}
      {role === 'recruiter' && <div>recruiter dashboard</div>}
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const useId = session.user.id
  const res = await supabase.from('users').select('role').eq('id', userId)
  return {
    props: { role: res.data[0].role }
  }
}

export default Dashboard

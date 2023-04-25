// import { useSession } from 'next-auth/react'
// import { useState } from 'react'
// // import ApplicantDashboard from '../components/ApplicantDashboard'
// // import RecruiterDashboard from '../components/RecruiterDashboard'
// import Roleselect from '@/components/roleselect/Roleselect'
// import { useEffect } from 'react'
// import supabase from '@/lib/supabaseClient'

// const Dashboard = () => {
//   const { data: session, status } = useSession()
//   const [role, setRole] = useState()

//   useEffect(() => {
//     const getUser = async () => {
//       const userRole = await supabase.from('users').select('id, role').eq('id, session.user.id')
//       console.log('user: ', userRole)
//       setRole(user.role)
//     }
//     getUser()
//   }, [])
//   // console.log('loading: ', loading)
//   console.log('session: ', session)
//   // console.log('userID: ', session)

//   if (!session) {
//     return <div>Access denied. Please log in.</div>
//   }

//   if (!role) {
//     return <Roleselect />
//   }

//   return (
//     <>
//       {role === 'applicant' && <div>applicant</div>}
//       {role === 'recruiter' && <div>recruiter</div>}
//     </>
//   )
// }

// export default Dashboard
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Roleselect from '@/components/roleselect/Roleselect'
import supabase from '@/lib/supabaseClient'

const Dashboard = () => {
  const { data: session, status } = useSession()
  console.log('status: ', status)
  const [role, setRole] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      if (session) {
        const { data, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', session.user.id)

        if (error) {
          console.error('Error fetching userRole:', error)
          return
        }

        if (data && data.length > 0) {
          const userRole = data[0].role
          console.log('userRole:', userRole)
          setRole(userRole)
        }
      }
    }

    getUser()
  }, [session])

  console.log('session:', session)

  if (status === 'unauthenticated') {
    return <div>Access denied. Please log in.</div>
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

export default Dashboard

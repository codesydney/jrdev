import { useSession } from 'next-auth/react'
// import ApplicantDashboard from '../components/ApplicantDashboard'
// import RecruiterDashboard from '../components/RecruiterDashboard'
import Roleselect from '@/components/roleselect/Roleselect'

const Dashboard = () => {
  const { data: session, status } = useSession()
  // console.log('loading: ', loading)
  console.log('session: ', session)

  if (!session) {
    return <div>Access denied. Please log in.</div>
  }

  if (!session.user.role) {
    return <Roleselect />
  }

  return (
    <>
      {session.user.role === 'applicant' && <div>applicant</div>}
      {session.user.role === 'recruiter' && <div>recruiter</div>}
    </>
  )
}

export default Dashboard

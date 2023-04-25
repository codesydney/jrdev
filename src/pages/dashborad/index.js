import { useSession } from 'next-auth/react'
import Roleselect from '../../components/roleselect/RoleSelect'
// import ApplicantDashboard from '../components/ApplicantDashboard'
// import RecruiterDashboard from '../components/RecruiterDashboard'

const Dashboard = () => {
  const { data: session, status } = useSession()
  // console.log('loading: ', loading)
  console.log('session: ', session)

  if (status) {
    return <div>Loading...</div>
  }

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

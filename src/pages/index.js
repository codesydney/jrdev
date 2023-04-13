import Layout from "@/components/layout/Layout"
import Card from "@/components/Card"
import { useSession } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession()
  return (
    <Layout style='flex flex-col items-center'>
      <article className='prose flex flex-col items-center'>
        <div className='text-center '>
          <h1 className='m-0 text-black'>Jr-dev</h1>
          <p className='m-0 text-dark font-semibold'>From Code.Sydney</p>
        </div>
        <div className='flex flex-col md:flex-row md:gap-[10%]'>
          <Card
            title='Recruiter'
            text="Make an account with jr-dev to find and hire qualified dev's in your area"
          />
          <Card
            title='Jr developer'
            text='Make an account with jr-dev to find Local jobs and stand out from the crowd'
          />
        </div>
      </article>
    </Layout>
  )
}

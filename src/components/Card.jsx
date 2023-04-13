import React from "react"

import { signIn } from "next-auth/react"
function Card({ title, text }) {
  return (
    <div className=' min-w-[300px] min-h-[250px] border-[3px] border-primary p-5 mt-10 md:mx-0 mx-24 px-3 rounded-3xl flex flex-col justify-between items-center'>
      <div>
        <h2 className='m-0 text-center pb-8'>{title}</h2>

        <p className='text-center'>{text}</p>
      </div>

      <button
        className=' font-bold no-underline text-xl bg-primary px-5 py-1 rounded-full text-white shadow-lg'
        onClick={() => signIn()}
      >
        Sign up
      </button>
    </div>
  )
}

export default Card

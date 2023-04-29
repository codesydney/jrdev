import Image from "next/image"
import React from "react"
import Header from "@/components/header/Header"
import { GrDocumentUpload } from "react-icons/gr"
function index() {
  return (
    <>
      <Header cls=' absolute w-screen' />
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-3xl mb-10 font-bold text-dark text-center'>
          Create Account:
        </h1>

        <div className='flex flex-col gap-[15px]'>
          <input
            className='rounded-lg  h-[55px] border-[3px] border-dark'
            type='text'
            placeholder='Name:'
          />
          <input
            className='rounded-lg h-[55px] border-[3px] border-dark'
            type='email'
            placeholder='Email:'
          />
          <div className='flex gap-5'>
            <div className='h-[121px] w-[160px]'>
              <label htmlFor='file'>
                <div className='border-[3px] border-primary rounded-lg w-full h-full flex flex-col items-center py-2 justify-around '>
                  <h2 className='text-xl'>Resume:</h2>
                  <GrDocumentUpload className='text-5xl' />
                  <p className='text-xs'>.pdf only</p>
                </div>
              </label>
              <input
                onChange={() => console.log("hey")}
                accept='.pdf'
                type='file'
                id='file'
                className='hidden'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <input
                className='w-[160px] h-[55px] border-[3px] border-dark rounded-lg placeholder:text-center placeholder:text-black focus:placeholder:text-white'
                type='text'
                name=''
                id=''
                placeholder='Github'
              />
              <button className='w-[160px] h-[55px] bg-primary rounded-lg text-white '>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index

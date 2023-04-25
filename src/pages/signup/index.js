import { useRouter } from 'next/router'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import signUp from '../../../public/assets/signUp.png'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const Signup = () => {
  const [spinner, setSpinner] = useState(false)

  const router = useRouter()
  const { usertype } = router.query

  if (!usertype) {
    return <div>Redirct to error page</div>
  }

  return (
    <div className="w-full h-full">
      <div className="w-[80%] min-h-screen flex flex-col sm:flex-row justify-center items-center mx-auto bg-gradient-to-tr from-white to-bg-200">
        {/* SignUp form */}
        <div className="w-full h-screen flex items-center justify-center flex-col md:w-1/2 xl:w-1/3 p-6 sm:p-12 md:border-double md:border-r-4 md:rounded-tr-[15%]">
          <h1 className="text-2xl font-bold text-center mb-5">Please Sign Up</h1>

          <form className="flex flex-col items-center justify-center" onSubmit={() => {}}>
            <input
              className="border-2 w-full border-gray-300 p-2 rounded-lg m-2"
              type="email"
              placeholder="Email"
              onChange={() => {}}
            />
            <input
              className="border-2 w-full border-gray-300 p-2 rounded-lg m-2"
              type="password"
              placeholder="Password"
              onChange={() => {}}
            />
            {/* <p className={success ? 'text-text-200' : 'text-red-500'}>{successMessage}</p> */}
            <button
              type="submit"
              className="w-full disabled block bg-indigo-100 hover:bg-indigo-200 hover:scale-105 focus:bg-teal-700 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              {spinner ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1zm0 0h1v1a7 7 0 007-7H4v1zm0 0v1h1a7 7 0 007 7V4h-1zm0 0v1a8 8 0 018 8h-1a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  Logining...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          <hr className="mt-6 border-gray-300 w-full " />
          <button
            onClick={() => {
              signIn('google')
            }}
            className="
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            bg-white 
            border-black 
            text-black
            text-md py-3 font-semibold border-2 mt-6"
          >
            {/* <FcGoogle
              size={24}
              className="
                absolute
                left-4
                top-3
              "
            /> */}
            Continue with Google
          </button>
          <p className="mt-2 pb-2 font-semibold">
            Don't have an account?{' '}
            <Link href="/signin" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
        {/* Right side */}
        <div className="hidden md:block md:w-1/2 xl:w-2/3  ">
          <Image src={signUp} alt="" object-fit />
        </div>
      </div>
    </div>
  )
}

export default Signup

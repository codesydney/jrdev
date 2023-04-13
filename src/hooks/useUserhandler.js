// This hook is used to check if a user is logged in
// if they are they are allowed access to the page if not it will redirect the user to sign in
import { useSession, signIn } from "next-auth/react"
import { useEffect } from "react"
function useUserhandler() {
  const { data: session } = useSession()
  const checkStat = () => {
    if (!session) {
      signIn()
    }
  }
  useEffect(() => {
    setTimeout(checkStat(), 3000)
  }, [])
}

export default useUserhandler

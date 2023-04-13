import React from "react"
import useUserhandler from "@/hooks/useUserhandler"
function userdashboard() {
  useUserhandler()
  return <div>This is the user dashboard</div>
}

export default userdashboard

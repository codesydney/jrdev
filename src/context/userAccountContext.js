import { createContext, useState } from "react"

const UserAccountContext = createContext()

export const UserAccountProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    <UserAccountContext.Provider value={{ user, setUser }}>
      {children}
    </UserAccountContext.Provider>
  )
}

export default UserAccountContext

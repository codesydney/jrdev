import { Children, createContext, useState } from "react"
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [state, setState] = useState(false)
  const [user, setUser] = useState({
    firstName: "Engramar",
    lastName: "Bollas",
    photo: "https://randomuser.me/api/portraits/men/78.jpg",
    email: "engramar@code.sydney",
  })
  return (
    <UserContext.Provider value={{ user, setUser, state, setState }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

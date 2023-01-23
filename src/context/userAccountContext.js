import { createContext, useState } from "react"

const UserAccountContext = createContext()

export const UserAccountProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleClear = () => {
    setName("")
  }

  return (
    <UserAccountContext.Provider
      value={{
        name,
        email,
        password,
        passwordConfirm,
        error,
        handleEmail,
        handlePassword,
        handlePasswordConfirm,
        handleName,
        handleClear,
        setError,
      }}
    >
      {children}
    </UserAccountContext.Provider>
  )
}

export default UserAccountContext

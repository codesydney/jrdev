import { UserAccountProvider } from "./context/userAccountContext"
import SignUp from "./components/SignUp"
function App() {
  return (
    <UserAccountProvider>
      <SignUp />
    </UserAccountProvider>
  )
}

export default App

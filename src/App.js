import { UserAccountProvider } from "./context/userAccountContext"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UserSignUp from "./components/UserSignUp"
import Header from "./components/Header"
import SignIn from "./components/SignIn"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import RecruiterSignUp from "./components/RecruiterSignUp"
function App() {
  return (
    <UserAccountProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/usersignup' element={<UserSignUp />} />
          <Route path='/recruitersignup' element={<RecruiterSignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </UserAccountProvider>
  )
}

export default App

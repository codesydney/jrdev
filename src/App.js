import { useContext } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Header from "./components/Header"
import SignIn from "./components/SignIn"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import UserContext from "./context/UserInfo"
import UserDashboard from "./components/UserDashboard"
import BuildProfile from "./components/BuildProfile"
function App() {
  const { isLoggedIn } = useContext(UserContext)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        {isLoggedIn && (
          <Route path='/userdashboard' element={<UserDashboard />} />
        )}
        {isLoggedIn && (
          <Route path='/buildprofile' element={<BuildProfile />} />
        )}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

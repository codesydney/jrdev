import { useContext } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Header from "./components/Header"
import SignIn from "./components/SignIn"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import UserContext from "./context/UserInfo"
import UserDashboard from "./components/UserDashboard"
function App() {
  const { state } = useContext(UserContext)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        {state && <Route path='/userdashboard' element={<UserDashboard />} />}

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

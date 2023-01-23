import { UserAccountProvider } from "./context/userAccountContext"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Header from "./components/Header"
import SignIn from "./components/SignIn"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
function App() {
  return (
    <UserAccountProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </UserAccountProvider>
  )
}

export default App

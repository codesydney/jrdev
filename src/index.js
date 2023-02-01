import React from "react"
import { UserProvider } from "./context/UserInfo"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
)

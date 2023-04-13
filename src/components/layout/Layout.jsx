import React from "react"
import Header from "../header/Header"
function Layout({ children, style }) {
  return (
    <div>
      <Header />
      <div className={style}>
        <div className='py-5'>{children}</div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout

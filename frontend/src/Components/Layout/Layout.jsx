import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav>

        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout
import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav className='nav-bar'>
                <Link to='/'>SnackHub</Link>
                <Link to='/create'>Create</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout
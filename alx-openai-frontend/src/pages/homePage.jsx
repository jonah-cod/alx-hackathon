import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar'

const HomePage = () => {
  return (
    <div className='main-container'>
      <NavBar />
      <div className="content-container">
        <Outlet />
      </div>
      
    </div>
  )
}

export default HomePage
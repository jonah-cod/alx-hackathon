import React from 'react'
import '../dashboard.css'
import TopMenuOverview from '../components/topMenuOverview';
import SideMenu from '../components/sideMenu';
import { Outlet } from 'react-router-dom';


const AdminDashboard = () => {
  
  return (
    <div className='dashboard'>
      <SideMenu/>
      <TopMenuOverview/>
      <div className="outlet-container">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminDashboard
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'


const SideMenu = () => {
  return (
      <div className="side-menu-bar">
        
      <div className="logo-dash">
        <img src={logo} alt="" />
        <h4>Dashboard</h4>
      </div>
      <hr/>
      <div className="links">
        <Link to={'/dashboard/products'}>Products</Link>
        <Link to={'/dashboard/orders'}>Orders</Link>
        <Link to={'/dashboard/orders'}>Sales</Link>
        <Link to={'/dashboard/reports'}>Reports</Link>
      </div>
    </div>
  )
}

export default SideMenu
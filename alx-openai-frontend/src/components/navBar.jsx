import React from "react";
import logo from '../assets/images/logo.png'

const NavBar = () => {
      return (
            <div className="nav-bar">
                  <div className="nav-bar-content">
                        <div className="nav-bar-item logo">
                              <img src={logo} alt="" />
                              <span>Store</span>
                        </div>

                        <div className="nav-bar-item search">
                              <input type="text" placeholder="Search through the store..." />
                              <button type="submit">search</button>
                        </div>
                        <div className="nav-bar-item accounts">
                              <div className="account-item">
                                    <a href="#">
                                          <i class="far fa-user fa-2x"></i>
                                          <span>Account</span>
                                    </a>
                              </div>
                              <div className="account-item">
                                    <a href="#">
                                    <small>0</small>
                                          <i class="fas fa-cart-plus fa-2x"></i>
                                          <span>Cart</span>
                                    </a>
                              </div>
                        </div>

                        <div className="nav-bar-item menu">
                        <i className="fas fa-bars fa-2x"></i>
                        </div>

                  </div>
            </div>
      );
};

export default NavBar;

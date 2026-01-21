import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ setOpenMobileMenu }) => {
  return (
    <div className="sidebarMenu">
      <button onClick={() => setOpenMobileMenu(false)}>&times;</button>

      <div className="myProfileHeader">
        <Link to="Profile">
          <h2>MY PROFILE</h2>
        </Link>
        <ul>
          <li>MY WISHLIST</li>
        <Link to="Profile">
          <li>MY ORDERS</li>
          </Link>
          <li>MY ADDRESSES</li>
        </ul>
      </div>

      <hr />

      <div className="brandHeader">
        <h2>THE BRAND</h2>
        <ul>
          <li>THE MADE UP STORY</li>
          <li>FRANCHISE AND SUPPLIES</li>
          <li>STORE LOCATOR</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;

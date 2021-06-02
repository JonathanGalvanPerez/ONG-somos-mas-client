import React from 'react';
import * as FaIcons from 'react-icons/fa';

import "./Navbar.css";
import avatar from "../../../assets/images/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
        <div className="nav_icon" onClick={() => openSidebar()}>
            <FaIcons.FaBars/>
        </div>
        <div className="navbar__left">
            <a className="active_link" href="#">
            Admin
            </a>
        </div>
        <div className="navbar__right">
            <a href="#">
                <FaIcons.FaSearch/>
            </a>
            <a href="#!">
                <img className='imgAvatar' width="30" src={avatar} alt="avatar" />
            </a>
        </div>
    </nav>
  );
};

export default Navbar;
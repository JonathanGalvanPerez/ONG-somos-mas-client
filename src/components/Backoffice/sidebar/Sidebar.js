import React from 'react';
import './Sidebar.css';
import logo from '../../../assets/images/logo.png'
import * as FaIcons from 'react-icons/fa';

const Sidebar = ({sidebarOpen,closeSidebar}) =>{
    return(
        <div className={sidebarOpen? 'sidebar-responsive' : ''} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                     <img src={logo} alt='logo' />
                </div>

                <div className='faIcon'>
                    <FaIcons.FaArrowAltCircleLeft onClick = {() => closeSidebar()} id="sidebarIcon" aria-hidden="true"/>
                </div>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">                    
                    <FaIcons.FaHome /> 
                    <a href="#">Home</a>
                </div>
                <div className="sidebar__link">
                    <FaIcons.FaPeopleCarry />
                    <a href="#">Nosotros</a>
                </div>
                <div className="sidebar__link">
                    <FaIcons.FaRunning />
                    <a href="#">Actividades</a>
                </div>
                <div className="sidebar__link">
                    <FaIcons.FaHeart />
                    <a href="#">Contribuye</a>
                </div>
                <div className="sidebar__logout">
                    <FaIcons.FaPowerOff />
                    <a href="#">Log out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
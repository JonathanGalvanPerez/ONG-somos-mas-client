import React,{useState} from 'react';
import './Sidebar.css';
import logo from '../../../assets/images/logo.png'
import * as FaIcons from 'react-icons/fa';

//0T34-62 ..inicio
//Aun no trae el rolId del endpoint de acceso por lo que no va a mostrar las opciones
//del sidebar se puede forzar la variable = 1 para ver opciones
const userRol = localStorage.getItem('userRol')  
// const userRol=1
//0T34-62 ..fin

const Sidebar = ({sidebarOpen,closeSidebar,openActivities,closeActivities}) =>{

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
            {/* active_menu_link */}
                <div className="sidebar__link ">                    
                    <FaIcons.FaHome/> 
                    <a href="#">Home</a>
                </div>
                { userRol=== 1?   // //0T34-62 
                <>
                    <div className="sidebar__link">
                        <FaIcons.FaPeopleCarry />
                        <a href="#">Nosotros</a>
                    </div> 
                    <div className="sidebar__link">
                        <FaIcons.FaRunning />
                        <a href="#" onClick = {()=>openActivities()} >Actividades</a>
                    </div>
                    <div className="sidebar__link">
                        <FaIcons.FaNewspaper />
                        <a href="#">Novedades</a>
                    </div>
                    <div className="sidebar__link">
                        <FaIcons.FaPeopleCarry />
                        <a href="#">Testimonios</a>
                    </div>
                    <div className="sidebar__link">
                        <FaIcons.FaPhone />
                        <a href="#">Contacto</a>
                    </div>
                    <div className="sidebar__link">
                        <FaIcons.FaHeart />
                        <a href="#">Contribuye</a>
                    </div>
                    <div className="sidebar__logout">
                        <FaIcons.FaPowerOff />
                        <a href="#">Log out</a>
                    </div>
                    </>
                    : null    
                }
            </div>

        </div>
    )
}

export default Sidebar;
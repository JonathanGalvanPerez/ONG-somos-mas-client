import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../features/login/loginSlice';
import { NavLink, useHistory } from 'react-router-dom';
import { VStack } from '@chakra-ui/layout';
import { Icon, Link, Button } from '@chakra-ui/react';
import styles from './Sidebar.module.css';

const Sidebar = ({isOpen, isAdmin, onToggle}) =>{
    const dispatch =  useDispatch();
    const history = useHistory();
    const sidebarStyle ={
        background: 'gray',
        h: '90vh',
        w: { base: '100%', md: '30%'},
        minWidth: '300px',
        py: '10px',
        transition: 'all 0.5s',
        zIndex: '4',
        top: '60px',
        pos: { base: 'fixed', md: 'sticky' },
        d: { base: isOpen ? 'flex' : 'none', md: 'flex'}
    }
    const navLinkStyle = {
        d: 'block',
        color: '#f3f4f6',
        padding: '10px',
        w: { base: '80vw', md: '90%'},
        borderRadius: "lg",
        activeClassName: styles.active,
        onClick: onToggle
    }
    const logOutHandler = () => {
        dispatch(logOut());
        history.push("/");
    }
    return(
        <VStack as="nav" {...sidebarStyle}>
            {/* active_menu_link */}
            <Link as={NavLink} to="/backoffice/perfil" {...navLinkStyle}>                    
                <Icon as={FaIcons.FaUser} /> Perfil
            </Link>
            { isAdmin?
            <>
                <Link as={NavLink} to="/backoffice/edit-home" {...navLinkStyle}>
                    <Icon as={FaIcons.FaHome} /> Home
                </Link>
                <Link as={NavLink} to="/backoffice/edit-organization" {...navLinkStyle}>
                    <Icon as={FaIcons.FaPeopleCarry} /> Organizacion
                </Link> 
                <Link as={NavLink} to="/backoffice/activities" {...navLinkStyle}>
                    <Icon as={FaIcons.FaRunning} /> Actividades
                </Link>
                <Link as={NavLink} to="/backoffice/news" {...navLinkStyle}>
                    <Icon as={FaIcons.FaNewspaper} /> Novedades
                </Link>
                <Link as={NavLink} to="/backoffice/testimonials" {...navLinkStyle}>
                    <Icon as={FaIcons.FaCommentAlt} /> Testimonios
                </Link>
                <Link as={NavLink} to="/backoffice/contacts" {...navLinkStyle}>
                    <Icon as={FaIcons.FaPhone} /> Contactos
                </Link>
                <Link as={NavLink} to="/backoffice/users" {...navLinkStyle}>
                    <Icon as={FaIcons.FaHeart} /> Usuarios
                </Link>
                <Link as={NavLink} to="/backoffice/categories" {...navLinkStyle}>
                    <Icon as={FaIcons.FaTags} /> Categories
                </Link>
            </>
            : null
            }
            <Button onClick={logOutHandler} colorScheme="red" {...navLinkStyle}>
                <Icon as={FaIcons.FaPowerOff} /> Cerrar Sesión
            </Button>
        </VStack>
    )
}

export default Sidebar;
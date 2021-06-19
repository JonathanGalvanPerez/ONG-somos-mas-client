import { NavLink } from 'react-router-dom';
import React from 'react';
import { Link } from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';

export default function HeaderNavLink({ children, path, isMobile }) {
    const location = useLocation();
    const active = location.pathname === path;

    const linkStyle = {
        d: 'flex',
        textAlign: 'center',
        h: '50px',
        w: { base: '100%', sm: isMobile ? '50%' : 'auto'},
        px: isMobile ? 'auto' : '8px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: "lg",
        borderRadius: 'md' ,
        bg: isMobile ? active && "#fafa88" : active && "#fafa88",
        color : isMobile && active && "black",
        _hover: {
            bgColor: '#fafa88',
            color: 'black'
        },
        _active: {
            bgColor: 'red',
            color: 'white'
        },
        _focus: {
            outline: 'none'
        }
    };

    return (
        
        <Link as={NavLink} exact to={path} {...linkStyle}>
            {children}
        </Link>
        
    );
}

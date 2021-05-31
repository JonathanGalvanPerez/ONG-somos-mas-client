import { Link as ReactLink } from 'react-router-dom';
import React from 'react';
import { Link } from '@chakra-ui/layout';

export default function HeaderNavLink({ children, path, isMobile }) {
    const linkStyle = {
        d: 'flex',
        textAlign: 'center',
        h: '50px',
        w: { base: '100%', sm: isMobile ? '50%' : 'auto'},
        px: isMobile ? 'auto' : '5px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'md' ,
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
        <Link as={ReactLink} to={path} {...linkStyle} >
            {children}
        </Link>
    );
}

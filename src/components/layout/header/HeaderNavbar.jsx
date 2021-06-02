import React from 'react';
import HeaderNavLink from './HeaderNavLink';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';

export default function HeaderNavbar({ show, toggleNav, isMobile }) {
    const navbarStyle = {
        d: 'block',
        pos: ['absolute', 'absolute', 'absolute', isMobile ? 'absolute' : 'static'],
        top: ['100%', '100%', '100%', isMobile ? '100%' : '0'],
        left: ['0', '0', '0', isMobile ? '0' : 'auto'],
        w: ['100%', '100%', '100%', isMobile ? '100%' : 'auto'],
        h: '100%',
        flexGrow: '1'
    };
    const navItemsListStyle = {
        bgColor: isMobile ? '#18A0FB' : 'transparent',
        color: isMobile ? 'white' : '#18A0FB',
        direction: { base: 'column', sm: 'row' },
        h: isMobile ? 'auto' : '100%',
        wrap: 'wrap',
        align: 'center',
        spacing: 0
    };
    const buttonStyle = {
        d: { base: 'inline-block', sm: 'none' },
        fontSize: '15px',
        w: '40%',
        my: '5px',
        fontWeight: '550',
        px: '0',
        _hover: {
            fontSize: '17px'
        }
    };

    const navItems = [
        { label: 'Inicio', path: '/inicio' },
        { label: 'Nosotros', path: '/nosotros' },
        { label: 'Actividades', path: '/actividades' },
        { label: 'Novedades', path: '/inicio' },
        { label: 'Testimonios', path: '/inicio' },
        { label: 'Contacto', path: '/contacto' },
        { label: 'Contribuye', path: '/contribuye' }
    ];

    return (
        <Box {...navbarStyle} >
            <Collapse in={!isMobile || show} >
                <Flex onClick={toggleNav} {...navItemsListStyle} >
                    {navItems.map((navItem) => (
                        <HeaderNavLink key={navItem.label} path={navItem.path} isMobile={isMobile} >
                            {navItem.label}
                        </HeaderNavLink>
                    ))}
                    <Button color='#18A0FB' border='1px solid #18A0FB' bgColor='white'
                        {...buttonStyle} >Log in</Button>
                    <Button bgColor='#18A0FB' color='white' border='1px solid white'
                        {...buttonStyle} >Registrate</Button>
                </Flex>
            </Collapse>
        </Box>
    );
}

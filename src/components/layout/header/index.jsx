import React from 'react';
import { Button, Image, useMediaQuery } from '@chakra-ui/react';
import { Flex, HStack } from '@chakra-ui/layout';
import logoStatic from '../../../assets/images/logo.png';
import HeaderNavbar from './HeaderNavbar';
import HeaderNavToggle from './HeaderNavToggle';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAdmin, isLoggedIn } from './../../../features/login/loginSlice';
import HeaderLogoutBtn from './HeaderLogoutBtn';

export default function Header() {
    const location = useLocation();
    const { image } = useSelector((state) => state.publicInfo.data)
    const [isMobile] = useMediaQuery("(max-width: 1050px)");
    const [show, setShow] = React.useState(false);
    const toggleNav = () => setShow(!show);
    const _isLoggedIn = useSelector(isLoggedIn);
    const _isAdmin = useSelector(isAdmin);

    // Desactivar componente para ciertas paginas
    const pagesExcluded = ['/acceso', '/registro', '/backoffice'];
    if (pagesExcluded.includes(location.pathname))
        return null;
    
    const LOGIN_PATH = '/acceso';
    const REGISTER_PATH = '/registro';

    const buttonStyle = {
        d: { base: 'none', sm: 'flex'},
        fontSize: '15px',
        w: '130px',
        fontWeight: '550',
        px: '0',
        _hover: {
            transform: 'scale(1.05)'
        }
    }

    // Botones al no estar logueado
    const guestButtons = (<>
    <Button as={ReactLink} to={LOGIN_PATH}
        color='#18A0FB' border='1px solid #18A0FB' bgColor='white'
        {...buttonStyle} >Log in</Button>
    <Button as={ReactLink} to={REGISTER_PATH}
        bgColor='#18A0FB' color='white'
        {...buttonStyle} >Registrate</Button></>)

    // Botones al estar logueado
    const memberButtons = (<>
        <Button as={ReactLink} to='/backoffice'
        bgColor='#18A0FB' color='white'
        {...buttonStyle} >Backoffice</Button>
        <HeaderLogoutBtn as={ReactLink}
        color='#18A0FB' border='1px solid #18A0FB' bgColor='white'
        {...buttonStyle} >Cerrar sesión</HeaderLogoutBtn></>)

    return (
        <Flex as='header' justify={['center', 'space-between', 'space-between', 'space-between']}
        mb={8} pos='relative' fontSize='15px'
        w='100%' h='60px' zIndex='5' >
                <HStack spacing={2} pos='absolute' right='10px' h='100%' align='center' >
                    {_isLoggedIn ? memberButtons : guestButtons}
                    <HeaderNavToggle show={show} toggleNav={toggleNav} isMobile={isMobile} />
                </HStack>
                <ReactLink to='/'>
                    <Image h='100%' py='4px' px='15px' src={image || logoStatic} />
                </ReactLink>
                <HeaderNavbar show={show} toggleNav={toggleNav} isMobile={isMobile} />
        </Flex>
    );
}

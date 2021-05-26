/*
  Footer component with dynamic info

  Usage:
    <Footer />
*/

import * as React from 'react';
import { Box, VStack, HStack, Container, Link, Text, Image } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import SocialIcon from './../misc/SocialIcon';

// Footer nav link style
const linkStyle = {
  textDecoration: 'underline',
  textDecorationThickness: 2,
  textUnderlinePosition: 'under',
  textUnderlineOffset: '8px',
  textDecorationColor: 'transparent',
  _hover: { textDecorationColor: 'black' },
  transitionProperty: 'all',
  transitionDuration: '500ms',
};

// Nav links container style
const navW = {
  maxW: { base: '95%', md: '95%', xl: '75%' },
};
const footerNavStyle = {
  fontSize: { base: 'lg', lg: 'lg' },
  justifyContent: 'space-between',
  d: { base: 'grid', lg: 'flex' },
  gridRowGap: 4,
  gridAutoFlow: 'row dense',
  gridTemplateColumns: { base: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0,1fr))' },
  fontWeight: 'semibold',
  flexDirection: { base: 'column', md: 'row' },
  alignItems: 'center',
  ...navW,
};

// Logo style
const footerLogoStyle = {
  cursor: 'pointer',
  _hover: { transform: 'scale(1.1)' },
  transitionProperty: 'all',
  transitionDuration: '500ms',
  width: { base: '220px', md: '240px' },
};

export default function Footer() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const footerNavLinks = {
    leftColumn: [
      { label: 'Novedades', path: '/novedades' },
      { label: 'Actividades', path: '/actividades' },
      { label: 'Contribuye', path: '/contribuye' },
    ],
    rightColumn: [
      { label: 'Testimonios', path: '/testimonios' },
      { label: 'Nosotros', path: '/nosotros' },
      { label: 'Contacto', path: '/contacto' },
    ],
  };

  const socialLinks = [
    { link: 'https://facebook.com', icon: 'facebook', tooltipText: '/usuario' },
    { link: 'https://instagram.com', icon: 'instagram', tooltipText: '/usuario' },
    { link: 'https://instagram.com', icon: 'twitter', tooltipText: '/usuario' },
    { link: 'email:correo@test.com', icon: 'email', tooltipText: 'correo@test.com' },
    { icon: 'phone', tooltipText: '1234567' },
  ];

  return (
    <Box bg='white' w='full' color='gray.800' pb={12} pt={16} px={1} textAlign='center'>
      <VStack spacing={10}>
        {isMobile && <Image gridColumn='span 3 / span 3' {...footerLogoStyle} src={logo} alt='Somos Más' />}

        {/* Footer Nav Links */}
        <Container {...footerNavStyle}>
          {footerNavLinks.leftColumn.map((navLink) => (
            <Link {...linkStyle} href={navLink.path}>
              {navLink.label}
            </Link>
          ))}
          {!isMobile && <Image {...footerLogoStyle} src={logo} alt='Somos Más' />}
          {footerNavLinks.rightColumn.map((navLink) => (
            <Link {...linkStyle} href={navLink.path}>
              {navLink.label}
            </Link>
          ))}
        </Container>

        <Box bg='blackAlpha.300' h='1px' w={{base:'77%', md:"77%", xl:"73%"}} />

        <VStack spacing={5}>
          <HStack spacing={3}>
            {socialLinks.map((social) => (
              <SocialIcon icon={social.icon} tooltipText={social.tooltipText} link={social.link} />
            ))}
          </HStack>
          <Text fontSize='xs' fontWeight='normal' color='gray.600' cursor='default'>
            © {new Date().getFullYear()} by Alkemy. Todos los derechos reservados.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

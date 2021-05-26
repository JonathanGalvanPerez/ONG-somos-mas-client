import * as React from 'react';
import { Box, VStack, Container, Link, Text, Image } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';

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
const footerNavStyle = {
  fontSize: { base: 'lg', md: 'md', lg: 'lg' },
  justifyContent: 'space-between',
  d: { base: 'grid', md: 'flex' },
  gridRowGap: 4,
  gridAutoFlow: 'row dense',
  gridTemplateColumns: { base: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0,1fr))' },
  fontWeight: 'semibold',
  flexDirection: { base: 'column', md: 'row' },
  alignItems: 'center',
  maxW: '6xl',
};

// Logo style
const footerLogoStyle = {
  cursor: 'pointer',
  _hover: { transform: 'scale(1.1)' },
  transitionProperty: 'all',
  transitionDuration: '500ms',
  width: '200px',
};

export default function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });

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

  return (
    <Box w='full'>
      <Box bg='white' w='100%' color='gray.800' pb={12} pt={16} px={1} textAlign='center'>
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

          <Box bg='blackAlpha.300' h='1px' w='60%' />

          <VStack spacing={5}>
            <Text fontSize='xs' fontWeight='normal' color='gray.600' cursor='default'>
              © {new Date().getFullYear()} by Alkemy. Todos los derechos reservados.
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

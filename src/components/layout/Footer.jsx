import * as React from 'react';
import { Box, VStack, Container, Link, Text } from '@chakra-ui/react';

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
  fontWeight: 'semibold',
  flexDirection: { base: 'column', md: 'row' },
  alignItems: 'center',
  maxW: '6xl',
};

export default function Footer() {
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
          {/* Footer Nav Links */}
          <Container {...footerNavStyle}>
            {footerNavLinks.leftColumn.map((navLink) => (
              <Link {...linkStyle} href={navLink.path}>
                {navLink.label}
              </Link>
            ))}
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

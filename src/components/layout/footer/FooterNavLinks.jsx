/*
  Footer navigation with logo

  Usage:
    <FooterNavLinks />
*/

import * as React from 'react';
import { Container, Link } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import FooterLogo from './FooterLogo';

// Container style
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
  maxW: { base: '95%', md: '95%', xl: '75%' },
};

// Link style
const linkStyle = {
  textDecoration: 'underline',
  textDecorationThickness: 2,
  textUnderlineOffset: '8px',
  textDecorationColor: 'transparent',
  _hover: { textDecorationColor: 'black' },
  transitionProperty: 'all',
  transitionDuration: '500ms',
};

export default function FooterNavLinks() {
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

  return (
    <>
      {/* Footer Nav Links */}
      {isMobile && <FooterLogo gridColumn='span 3 / span 3' />}
      <Container {...footerNavStyle}>
        {footerNavLinks.leftColumn.map((navLink) => (
          <Link key={navLink.path} {...linkStyle} href={navLink.path}>
            {navLink.label}
          </Link>
        ))}

        {!isMobile && <FooterLogo />}

        {footerNavLinks.rightColumn.map((navLink) => (
          <Link key={navLink.path} {...linkStyle} href={navLink.path}>
            {navLink.label}
          </Link>
        ))}
      </Container>
    </>
  );
}

/*
  Footer logo component

  Usage:
    <FooterLogo />
*/

import * as React from 'react';
import { Image } from '@chakra-ui/react';
import logoStatic from '../../../assets/images/logo.png';
import { useSelector } from 'react-redux';

// Footer logo style
const footerLogoStyle = {
  cursor: 'pointer',
  _hover: { transform: 'scale(1.1)' },
  transitionProperty: 'all',
  transitionDuration: '500ms',
  width: { base: '220px', md: '240px' },
};

export default function FooterLogo({...props}) {
  const { image } = useSelector((state) => state.publicInfo.data);

  return <Image {...footerLogoStyle} src={image || logoStatic} {...props} />;
}

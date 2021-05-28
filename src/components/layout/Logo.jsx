/*
  Logo component

  Usage:
    <Logo />

    Accepts any style prop from chakra
*/

import * as React from 'react';
import { Image } from '@chakra-ui/react';
import logoStatic from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';

// Logo style
const logoStyle = {
  _hover: { transform: 'scale(1.1)' },
  transitionProperty: 'all',
  transitionDuration: '500ms',
  width: { base: '250px', md: '270px' },
};

export default function Logo({...props}) {
  const { image } = useSelector((state) => state.publicInfo.data);

  return <Image {...logoStyle} src={image || logoStatic} {...props} />;
}
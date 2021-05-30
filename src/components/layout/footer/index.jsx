/*
  Footer component with dynamic info

  Usage:
    <Footer />
*/

import * as React from 'react';
import { Box, VStack, HStack, Text } from '@chakra-ui/react';
import SocialIcon from '../../misc/SocialIcon';
import FooterNavLinks from './FooterNavLinks';
import { useSelector } from 'react-redux';

export default function Footer() {
  const { facebookUser, instagramUser, twitterUser, email, phone } = useSelector((state) => state.publicInfo.data);

  const socialLinks = [
    { link: `https://facebook.com/${facebookUser}`, icon: 'facebook', tooltipText: '/'+facebookUser },
    { link: `https://instagram.com/${instagramUser}`, icon: 'instagram', tooltipText: '/'+instagramUser },
    { link: `https://twitter.com/${twitterUser}`, icon: 'twitter', tooltipText: '/'+twitterUser },
    { link: `mailto:${email}`, icon: 'email', tooltipText: email },
    { icon: 'phone', tooltipText: phone },
  ];

  const socialLinksRender = socialLinks.map((social) => (
    <SocialIcon key={social.icon} icon={social.icon} tooltipText={social.tooltipText} link={social.link} />
  ));

  return (
    <Box bg='transparent' w='full' color='gray.800' pb={6} pt={16} px={1} textAlign='center'>
      <VStack spacing={10}>
        {/* Nav links */}
        <FooterNavLinks />

        {/* Separator */}
        <Box bg='blackAlpha.300' h='1px' w={{ base: '77%', md: '77%', xl: '73%' }} />

        <VStack spacing={5}>
          {/* Social links */}
          <HStack spacing={3}>{socialLinksRender}</HStack>

          {/* Copyright */}
          <Text fontSize='xs' fontWeight='normal' color='gray.600' cursor='default'>
            © {new Date().getFullYear()} by Alkemy. Todos los derechos reservados.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

import React from 'react';
import { useFormik } from 'formik';
import { 
  FormControl, 
  Image, 
  Box, 
  Button, 
  FormLabel, 
  Input, 
  Stack, 
  InputLeftElement, 
  InputGroup, 
  Icon, 
  Container } from '@chakra-ui/react';
import * as Yup from 'yup';

export default function EditOrganization() {
  // regex para validar que la URL provista sea de una imagen
  const URL = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i
  
  //props de formik
  const formik = useFormik({
    initialValues:{
      ongName: "Somos Mas",
      logo: "https://pngimage.net/wp-content/uploads/2018/05/example-logo-png-6.png" // logo de ejemplo para testear
    },
    validatationSchema: Yup.object().shape({
      ongName: Yup.string().required('Ingresar un nombre'),
      logo: Yup.string().matches(URL, "Ingresar una URL válida")
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },

  });
  
  return (

    <Container maxWidth="xl" border="gray.100 solid 1px" mt="10" centerContent>
           
      
    </Container>
  )
}
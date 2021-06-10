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
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3} >
          <FormControl isRequired isInvalid={formik.errors.ongName && formik.touched.ongName}>
            <FormLabel fontSize="12"> Nombre de la organización</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="EditIcon"/>} />
                <Input
                  type="text"
                  name="ongName"
                  id="ongName"
                  placeholder="Editar nombre de la organización"
                  value={formik.values.ongName}
                  onChange={formik.handleChange}
                />
            </InputGroup>
          </FormControl>

          <FormControl isRequired isInvalid={formik.errors.logo && formik.touched.logo}>
            <FormLabel fontSize="12"> Logo de la organización </FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
                <Input
                  type="text"
                  id="logo"
                  name="logo"
                  placeholder="URL del logotipo"
                  value={formik.values.logo}
                  onChange={formik.handleChange}
                />
            </InputGroup>
            <Box >
                <Image src={formik.values.logo} alt="" />
            </Box>

          </FormControl>
          <Button 
            type="submit" 
            bg="gray.700" 
            color="white" 
            borderRadius='full'
            _hover= {{ background:"#265acc" }}
            
            >Guardar Cambios</Button>

        </Stack>
      
      </form>   
           
      
    </Container>
  )
}
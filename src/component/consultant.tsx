import {
    Heading,
    Avatar,
    Box,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Grid,
    useToast,
  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

  export const  Consultant = () =>  {
    const [consultant, setConsultant] = useState([]);
    const toast = useToast();
    const navigate = useNavigate();
    
    const seeMore = async () => {
      try{
      const request = await fetch('http://localhost:5000/api/v1/auth/Userregister', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ username, password, email }),
      });
  
      const data = await request.json();
    }catch (error) {
      toast({
        title: '  حدث خطأ ',
        status: 'error',
        duration: 3000,
        position: 'top',
      });
    }
    }
    useEffect ( () => {
      const fetchTodos = async () => {
        const request = await fetch('/api/v2/auth/consultant', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
        const data = await request.json();
        setConsultant(data);
      };
    })
    return (
    <Grid 
    dir='rtl'
    mt="10"
    mr={'20'}
    templateColumns='repeat(3, 1fr)'
    gap={6}
    p="10"
    templateRows="repeat(2, 1fr)"
    >
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
            {consultant.map( (item :any) => (
              <Box id={item.id}>
                        <Avatar
                        size={'xl'}
                        src='profile.png'
                        mb={4}
                        pos={'relative'}
                    
                      />
                      <Heading fontSize={'2xl'} fontFamily={'body'}>
                       {item.username}
                      </Heading>
                      <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
                        <Badge
                          px={2}
                          py={1}
                          // bg={useColorModeValue('gray.50', 'gray.800')}
                          fontWeight={'400'}>
                         {item.filed}
                        </Badge>
                      </Stack>
                      <Text
                        textAlign={'center'}
                        // color={useColorModeValue('gray.700', 'gray.400')}
                        py={3}
                        px={3}>{item.certificate}</Text>
              
                      <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                          flex={1}
                          fontSize={'sm'}
                          cursor='pointer'
                          rounded={'full'}
                          bg={'#F2DFA7'}
                          color={'#1F5373'}
                          _focus={{
                            bg: '#F2DFA7',
                          }}>
                         
                        </Button>
                      </Stack>
                      </Box>
            ))}
        </Box>

    </Grid>
    
    );
  }  

  //                             onClick={seeMore} 

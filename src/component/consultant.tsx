import {
    Heading,
    Avatar,
    Box,
    Text,
    Stack,
    Button,
    Badge,
    // useColorModeValue,
    Grid,
  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';

  export const  Consultant = () =>  {
    const [consultant, setConsultant] = useState([]);


    const fetchCards = async () => {
      const request = await fetch('/api/v2/auth/consultant', {
        method: "GET",
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await request.json();
      setConsultant(data);
      console.log(data)

    };
   
    useEffect(() => {
      fetchCards();
    }, [])
    
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
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        
        {consultant.map( (item :any) =>(
      
        <Box id={item.user_id}>
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
                      <Link to={`/info/${item.user_id}`}>

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
                       
                      </Button></Link>
                    </Stack>
                    </Box>
     
      
                        ))}
                         </Box>
    </Grid>
    
    );
  }  

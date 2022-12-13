import { Heading,Flex,VStack,Box,Input,Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const  LoginPages =() =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  const toast = useToast();
  const submitLogin = async () => {
    try {
      const request = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: 'error',
          duration: 3000,
          position: 'top',
        });
        return;
      }
      toast({
        title: data.message,
        status: 'success',
        duration: 3000,
        position: 'top',
      });
      localStorage.setItem('token', data.token);
      navigate('/consultant');
    } catch (error) {
      toast({
        title: ' حدث خطأ ',
        status: 'error',
        duration: 3000,
        position: 'top',
      });
    }
  };

  
  return (
    <Flex justifyContent='center' alignItems='center' height='100vh'>
    <VStack spacing='2rem' width='20rem'>
      <Heading textColor={"#1F5373"}> تسجيل دخول </Heading>
      <VStack align='left' spacing='1rem' width='100%'>
      <Box>
            <Input
            textAlign={'right'}
            placeholder= "الأيميل"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
            />
          </Box>
          <Box>
            <Input
            textAlign={'right'}
            placeholder= "كلمة المرور"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
            />
          </Box>
          <Button textColor={"#1F5373"} bg={'#F2DFA7'}
          onClick={submitLogin} rounded={'full'}> دخول </Button>
          </VStack>
      </VStack>
      </Flex>
  )
}

export default LoginPages
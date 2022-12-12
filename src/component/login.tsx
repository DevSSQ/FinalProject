import { Heading,Flex,VStack,Box,Input,Button } from '@chakra-ui/react';
import { useState } from 'react'

function LoginPages() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
          onClick={LoginPages} rounded={'full'}> دخول </Button>
          </VStack>
      </VStack>
      </Flex>
  )
}

export default LoginPages
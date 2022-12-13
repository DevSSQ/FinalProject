import { Heading,Flex,VStack,Box,Input,Button,Stack,Text, Link} from '@chakra-ui/react';
import { useState } from 'react'

function LoginPages() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const Links = [<Link to ='/register'><L]
  return (
    <Flex justifyContent='center' alignItems='center' height='60vh'>
    <VStack spacing='2rem' width='20rem'>
      <Heading textColor={"#1F5373"}> تسجيل دخول </Heading>
      <VStack align='left' spacing='1rem' width='100%'>
      <Box>
            <Input
            textAlign={'right'}
            placeholder= "البريد الالكتروني"
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
          <Stack pt={6}>
            <Text align={'center'}>
           ليس لديك حساب ؟  <Link href='/register' color={"#1F5373"} >اضغط هنا</Link>
            </Text>
          </Stack>


          <Button textColor={"#1F5373"} bg={'#F2DFA7'}
          onClick={LoginPages} rounded={'full'}> دخول </Button>
          </VStack>
      </VStack>
      </Flex>
  )
}

export default LoginPages
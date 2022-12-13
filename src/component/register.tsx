import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Button,
  Stack,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPages = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');

const toast = useToast();
const navigate = useNavigate();


const submitRegister = async () => {
  try {
    if (password !== password2) {
      toast({
        // change the message 
        title: `الرجاء التأكد من تطابق كلمة المرور `,  
        status: 'error',
        duration: 3000,
        position: 'top',
      });
      return;
    }
    
    const request = await fetch('http://localhost:5000/api/v2/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });

    const data = await request.json();

    if (request.status !== 201) {
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
    navigate('/login');
  } catch (error) {
    toast({
      title: '  حدث خطأ ',
      status: 'error',
      duration: 3000,
      position: 'top',
    });
  }
};

return (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <VStack spacing='2rem' width='20rem'>
      <Heading textColor={"#1F5373"}>تسجيل جديد  </Heading>
      <h3> أنشئ حسابك هنا</h3>
      <VStack align='left' spacing='1rem' width='100%'>
        <Box>
          <Input
          placeholder= " اسم المستخدم"
          textAlign={'right'}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type='text'
          />
        </Box>
        <Box>
          <Input
          textAlign={'right'}
          placeholder= "البريد الألكتروني"
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
        <Box>
          <Input
          textAlign={'right'}
          placeholder= "تأكيد كلمة المرور"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            type='password'
          />
        </Box>
        <Stack pt={6}>
            <Text align={'center'}>
           لديك حساب ؟   <Link color={"#1F5373"}>اضغط هنا</Link>
            </Text>
          </Stack>

        <Button textColor={"#1F5373"} bg={'#F2DFA7'}
        onClick={submitRegister} rounded={'full'}>تسجيل </Button>
      </VStack>
      </VStack>
      </Flex>
)
}

export default RegisterPages
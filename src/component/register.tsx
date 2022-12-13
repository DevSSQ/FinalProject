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
} from '@chakra-ui/react';
import { useState } from 'react';

function RegisterPages() {
  const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');
return (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <VStack spacing='2rem' width='20rem'>
      <Heading textColor={"#1F5373"}>تسجيل مستخدم جديد </Heading>
      <h3> أنشئ حسابك هنا</h3>
      <VStack align='left' spacing='1rem' width='100%'>
        <Box>
          <Input
          placeholder= "اسم المستخدم"
          textAlign={'right'}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type='text'
          />
        </Box>
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
        onClick={RegisterPages} rounded={'full'}>تسجيل </Button>
      </VStack>
      </VStack>
      </Flex>
)
}

export default RegisterPages
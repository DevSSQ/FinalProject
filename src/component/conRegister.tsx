import {
    Box,
    Flex,
    Heading,
    VStack,
    Text,
    Input,
    Button,
    Stack,

    Checkbox
  } from '@chakra-ui/react';
  import { useState } from 'react';

function RegisterAdviser() {

    const [thefield, setThefield] = useState('');
    const [myexperiencess, setMyexperiencess] = useState('');
    const [licensenumber, setLicensenumber] = useState('');
  return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <VStack spacing='2rem' width='20rem'>
            <Heading textColor={"#1F5373"}>تسجيل مستخدم جديد </Heading>
            <h3> أنشئ حسابك هنا</h3>
            <VStack align='left' spacing='1rem' width='100%'>
            <Box>
                <Input
                placeholder= "المجال"
                textAlign={'right'}
                    onChange={(e) => setThefield(e.target.value)}
                    value={thefield}
                    type='text'
                />
            </Box>
            <Box>
            <Input
            textAlign={'right'}
            placeholder= "البريد الألكتروني"
              onChange={(e) => setMyexperiencess(e.target.value)}
              value={myexperiencess}
              type='myexperiencess'
            />
          </Box>
            <Box>
              <Input
              textAlign={'right'}
              placeholder= "تأكيد كلمة المرور"
                onChange={(e) => setLicensenumber(e.target.value)}
                value={licensenumber}
                type='password'
              />
            </Box>
            <Stack pt={6}>
                <Text alignItems={'right'} ml={'200'}> سياسة الانضمام
               
                <Checkbox defaultChecked alignItems={'right'} ml={'3'}> </Checkbox>
                </Text>
              </Stack>
  
            <Button textColor={"#1F5373"} bg={'#F2DFA7'}
            onClick={RegisterAdviser} rounded={'full'}>تسجيل </Button>
          </VStack>
          </VStack>
          </Flex>
    )
  }

export default RegisterAdviser
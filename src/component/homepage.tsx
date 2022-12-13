import {
  Flex,
  Container,
  Heading,
  Text,
  Avatar,
  Box,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Grid,
  Image,
  Input,
  HStack
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';


export const  HomePage =() => {
  const navigate = useNavigate();

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={{base: 20, md:28}}
        >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          color = {'#1F5373'}>
          اتخذ قرارك بثقة، و تواصل مع مستشارك{' '}
          <Text as={'span'} color={'#FFC947'}>
          لخططك الاستثمارية
          </Text>
        </Heading>
        <Text color={'#1F5373'} fontSize ={'2xl'}>
        احصل على استشارة مالية حول طريقة للاستثمار 
        والادخار بشكل سريع أينما كنت من خلال مستشارين ماليين 
        متخصصين 
        </Text>
        <Flex w={'full'}>
        </Flex>
      </Stack>
      <Stack
      textAlign={'right'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 20 }}
      px={{base: 20, md:15}}
      >
       <Grid templateColumns='repeat(3, 1fr)'mb={50} ml={120} >
          <Box
        maxW={'350px'}
        textAlign={'left'} alignContent={'center'}>
        <Image boxSize='130px' src={'./amony.png'} />
        <Heading fontSize={'2xl'} fontFamily={'body'} mt={'5'}>
          محفظتك الخاصة
        </Heading>
      </Box>
      <Box
        maxW={'350px'}
        textAlign={'left'}>
        <Image boxSize='130px' src={'./person.png'} />
        <Heading fontSize={'2xl'} fontFamily={'body'} mt={'5'} mr={''}>
      نخبة من المستشارين
        </Heading>
      </Box>
      <Box
        maxW={'350px'}
        textAlign={'left'}>
        <Image boxSize='130px' src={'./chat.png'} />
        <Heading fontSize={'2xl'} fontFamily={'body'} mt={'5'} mr={'5'}>
          جلسات فورية
        </Heading>
      </Box>
  </Grid>
      <Heading
      fontWeight={600}
      fontSize={'4xl'}
      lineHeight={'110%'}
      color = {'#1F5373'}
      >
          أبرز المستشارين
      </Heading>
      </Stack>

    <Grid templateColumns='repeat(3, 1fr)'mb={50} > 
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        justifyContent={'space-between'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          mb={4}
          pos={'relative'} 
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          نورة الصالح
        </Heading>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            ترخيص رقم: 891472
          </Badge>
        </Stack>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          py={3}
          px={3}>
          محلل استثمارات وادارة المصاريف حاصل 
           على شهادة المستشار المالي المعتمد (CFC)
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Link to = "/login">
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'#F2DFA7'}
            color={'#1F5373'}
            _focus={{
              bg: '#F2DFA7',
            }}>
            تفاصيل أكثر
          </Button></Link>
        </Stack>
      </Box>

      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          نورة الصالح
        </Heading>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            ترخيص رقم: 891472
          </Badge>
        </Stack>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          py={3}
          px={3}>
          محلل استثمارات وادارة المصاريف حاصل 
           على شهادة المستشار المالي المعتمد (CFC)
        </Text>
        <Stack mt={8} direction={'row'} spacing={4}>
        <Link to = "/login">
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
            تفاصيل أكثر
          </Button>
          </Link>
        </Stack>
      </Box>

      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          نورة الصالح
        </Heading>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            ترخيص رقم: 891472
          </Badge>
        </Stack>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          py={3}
          px={3}>
          محلل استثمارات وادارة المصاريف حاصل 
           على شهادة المستشار المالي المعتمد (CFC)
        </Text>
        <Stack mt={8} direction={'row'} spacing={10}>
        <Link to = "/login">
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
            تفاصيل أكثر
          </Button>
          </Link>
        </Stack>
      </Box>
  </Grid>
  <br/>
  <br/>
  <br/>
  <br/>


  <Heading
      fontWeight={600}
      fontSize={'4xl'}
      lineHeight={'110%'}
      color = {'#1F5373'}
      dir="rtl"
      >
          تواصل معنا
      </Heading>

  <Box as={'form'} mt={10}  mb={10} bg={'#D9D9D9'} >
          <Stack spacing={4}>
          <HStack mt={'5'} mr={'5'} >
            <Input
              placeholder="الايميل"
              textAlign={'right'}
              width={'750px'}
              ml={'500'}
              bg={'white'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
            <Input
              placeholder="الاسم كامل "
              width={'750px'}
              ml={'500'}
              textAlign={'right'}
              bg={'white'}
              border={0}
              color={'gray.500'}
              
              _placeholder={{
                color: 'gray.500',
              }}
            />
              </HStack>
              <HStack >
            <Input
            mr={'5'} ml={'5'}
              placeholder="الرسالة"
              textAlign={'right'}
              bg={'white'}
              border={0}
              color={'gray.500'}
              height={'200'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
            </HStack>
          </Stack>
          <Button 
            mb={'5'}
            ml={'400'}
            mt={8}
            w={'150px'}
            bg={'#F2DFA7'}
            color={'#1F5373'}
            rounded={'full'}
           >
            ارسال
          </Button>
        </Box>
        <br/>
        <br/>

        </Container>
);
}
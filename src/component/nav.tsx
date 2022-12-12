import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

function Nav() {
  return (
    <Box
    color={useColorModeValue('gray.700', 'gray.200')}>
    <Container
      as={Stack}
      maxW={'6xl'}
      mt={'4'}
      ml={'200'}
      py={4}
      spacing={4}
      justify={'center'}
      align={'center'}>

      <Stack direction={'row'} spacing={6} maxW={'10xl'}>
        <Link href={'#'}>انضم معنا</Link>
        <Link href={'#'}>من نحن</Link>
        <Link href={'#'}>الجلسات</Link>
        <Link href={'#'}>الرئيسية</Link>
        <Image
              boxSize='180px'
              mt={'0'}
              ml={'90'}
              objectFit='cover'
              src='./levelup-2.png'></Image>
      </Stack>
      <Flex >

            {/* <Box>
              <img className='logo' src="./levelup.png" alt="" />
              
              </Box>  */}

              
        </Flex>
    </Container>
    <HStack >
    </HStack>
      </Box>

  )
}

export default Nav
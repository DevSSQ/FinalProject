import {
  Flex,
  HStack,
  Link,
  Image,
  Text,
} from '@chakra-ui/react';

function Nav() {
  return (
    <Flex alignItems='center' justifyContent='center'>
      <HStack  width='100vw' alignItems='center' justifyContent='center'>
        <Flex gap={5} borderBottom='1px' borderColor='gray.300' pr={0}>
      <Text fontSize='1.5em' fontFamily='inherit' ><Link href={'#'}>انضم معنا</Link></Text>
        <Text fontSize='1.5em' fontFamily='inherit'><Link href={'#'}>من نحن</Link></Text>
        <Text fontSize='1.5em' fontFamily='inherit'><Link href={'#'}>الجلسات</Link></Text>
       <Text fontSize='1.5em' fontFamily='inherit'> <Link href={'#'}>الرئيسية</Link></Text>
       </Flex>
        </HStack>
        <Image
              boxSize='160px'
              
              src='./levelup.png'></Image>
      
      </Flex>

  )
}

export default Nav
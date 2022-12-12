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
        <Flex gap={4} borderBottomWidth='1'>
      <Text fontSize='1.5em' fontFamily='inherit' ><Link href={'#'}>انضم معنا</Link></Text>
        <Text fontSize='1.5em' ><Link href={'#'}>من نحن</Link></Text>
        <Text fontSize='1.5em' ><Link href={'#'}>الجلسات</Link></Text>
       <Text fontSize='1.5em' > <Link href={'#'}>الرئيسية</Link></Text>
       </Flex>
        </HStack>
        <Image
              boxSize='160px'
              
              src='./levelup.png'></Image>
      
      </Flex>

  )
}

export default Nav
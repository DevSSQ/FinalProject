import {
  Flex,
  HStack,
  Link,
  Image
} from '@chakra-ui/react';

function Nav() {
  return (
    <Flex
   alignItems='center'
   justifyContent='center'
   >
      <HStack  width='100vw' alignItems='center' justifyContent='end'>
        <Link href={'#'}>انضم معنا</Link>
        <Link href={'#'}>من نحن</Link>
        <Link href={'#'}>الجلسات</Link>
        <Link href={'#'}>الرئيسية</Link>
        <Image
              boxSize='180px'
              
              src='./levelup.png'></Image>
      </HStack>
      </Flex>

  )
}

export default Nav
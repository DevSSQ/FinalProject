import {
  Flex,
  HStack,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <Flex alignItems='center' justifyContent='center'>

<Flex alignItems='center' justifyContent='start' ml={120} mt={0}>
    <HStack>
     <Menu>
      <MenuButton as={Button} bgColor={'#F2DFA7'} color={'#1F5373'}
       _focus={{
        bg: '#F2DFA7',
      }}
      >
      حسابي
     </MenuButton>
    <MenuList dir="rtl">
      <MenuItem>بياناتي</MenuItem>
    <MenuDivider />
      <MenuItem>تسجيل الخروج</MenuItem>
  </MenuList>
</Menu>
</HStack>
</Flex>


      <HStack  width='100vw' alignItems='center' justifyContent='center'>
      <Flex gap={5} borderBottom='1px' borderColor='gray.300' pr={0} >
      <Text fontSize='1.5em' fontFamily='inherit' ><Link to='/selectUser'>انضم معنا</Link></Text>
        <Text fontSize='1.5em' fontFamily='inherit'><Link to='#'>من نحن</Link></Text>
        <Text fontSize='1.5em' fontFamily='inherit'><Link to='/consultant'>الجلسات</Link></Text>
       <Text fontSize='1.5em' fontFamily='inherit'> <Link to="/">الرئيسية</Link></Text>
       </Flex>
        </HStack>
        <Image
        mr={90}
        boxSize='160px'
        src='./levelup.png'></Image>
      
      </Flex>

  )
}

export default Nav
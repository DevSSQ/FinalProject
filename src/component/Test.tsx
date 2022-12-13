import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    HStack,
    Flex
  } from '@chakra-ui/react';



function test() {
  return (
    <Flex alignItems='center' justifyContent='start' ml={50} mt={10}>
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
      <MenuItem>محفظتي </MenuItem>
    <MenuDivider />
      <MenuItem>تسجيل الخروج</MenuItem>
  </MenuList>
</Menu>
</HStack>
</Flex>

    
  )
}

export default test

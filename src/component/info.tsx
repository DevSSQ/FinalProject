import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Stack,
  Text,
  Image,
  Badge,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
  } from '@chakra-ui/react';

export default function blogPostWithImage() {
  
  return (
    <Center py={6}>
      <Box
        maxWidth={'45%'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={2}
        pb={50}
        >
        <Box
          h={'auto'}
          bg={'gray.100'}>
          <Flex pt={9} gap ={3} pb={7}>
            <Box>
          <Image
            ml={'5'}
            boxSize='70%'
            width='85%'
            src='profile.png'/>
        {/* <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={ 'gray.300'}
              />
            ))}
            </Box> */}
            {/* <StarIcon/> */}
            <Text pl={6} ml={2} pt={4} fontSize={'sm'} fontFamily='sans-serif'>سعر الجلسة : ٣٥٠ريال / ساعة</Text>
            </Box>

            
          <Stack direction={'column'} px={'50'} py={'-20'}>
            <Text fontWeight={600} textAlign={'right'} fontSize={'4xl'} fontFamily='sans-serif'>نورة سعد الصالح</Text>
            <Stack align={'center'} justify={'right'} direction={'row'} mt={3}>
            <Badge pr={10}
              fontSize='0.8em'
              fontFamily='sans-serif'>
              ترخيص رقم: 891472
            </Badge>
          </Stack>
          
          <Stack m={2} p={2} fontSize='1.1em' fontFamily='sans-serif' >
          <Box><Text textAlign={'right'} pr={3} >حاصل على الماجستير في العلوم المالية مستشار مالي سابق بالتخطيط الاستراتيجي في أرامكو مدرب تطوير شخصي بمعايير الـ ICI & ICF  ومهتم ببث المعرفة المالية ومعد وعي مالي في ثواني ومرشد معتمد </Text>
            </Box>  
             </Stack>
          </Stack>   
          </Flex>
        <Flex justifyContent={'space-around'}>
        <Box>
            <Text pt={2} fontSize={'md'} fontFamily='sans-serif'> السعر : ٣٥٠ ريال</Text>
            </Box>
            <Text pr={0} pl={2} pt={2}  fontFamily='sans-serif'>              <Menu>{({ isOpen }) => (
          <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} border='1px' >
        {isOpen ? 'اختيار المدة' : 'ساعة واحدة '}
      </MenuButton>
      <MenuList >
        <MenuItem >ساعة واحدة</MenuItem>
        <MenuItem onClick={() => alert('')}>ساعتين</MenuItem>
        <MenuItem> ثلاث ساعات</MenuItem>
        <MenuItem> أربع ساعات</MenuItem>
      </MenuList>
    </>
  )}
</Menu>   : مدة الجلسة</Text>
        </Flex>
        <Flex justifyContent='center' mt={7} p={5}><Button fontSize={'lg'} fontFamily='sans-serif'     
                bg={'#F2DFA7'}
              color={'#1F5373'}
              _hover={{
                bg: '#1F5373',
                color: '#F2DFA7'
              }}>طلب استشارة </Button></Flex>

        </Box>

  <Box >
    <Heading size='lg' pt={2} fontFamily='sans-serif' p='5' pl='80%'> التعليقات </Heading>
    <Stack p="4" boxShadow="lg" m="4" borderRadius="md">
      <Stack direction="row" p='5' pl='80%'>
        <Text fontSize={'xl'} fontFamily='sans-serif' fontWeight='bold'>عبدالله محمد </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        >
        <Text textAlign={'right'} pl='30%' fontSize={'md'} fontFamily='sans-serif'>
   تجربة أكثر من رائعة والمستشار مستمع جيد واستفدت كثير من الجلسة </Text>

 </Stack>
    </Stack>
        </Box>
      
    <Stack p="4" boxShadow="lg" m="4" borderRadius="md">
      <Stack direction="row" p='5' pl='80%'>
        <Text fontSize={'xl'} fontFamily='sans-serif' fontWeight='bold'>مشعل  الغنام </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        >
        <Text textAlign={'right'} pl='30%' fontSize={'md'} fontFamily='sans-serif'>
   تجربة أكثر من رائعة والمستشار مستمع جيد واستفدت كثير من الجلسة </Text>

 </Stack>
    </Stack>

    <Stack p="4" boxShadow="lg" m="4" borderRadius="md">
      <Stack direction="row" p='5' pl='80%'>
        <Text fontSize={'xl'} fontFamily='sans-serif' fontWeight='bold'> حسن أحمد </Text>
      </Stack>
      {/* fontWeight="semibold" */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        >
        <Text textAlign={'right'} pl='30%' fontSize={'md'} fontFamily='sans-serif'>
 يعطيه العافية استفدت الكثير من الجلسة وبداية خير باذن الله</Text>

 </Stack>
    </Stack>
      </Box>

    </Center>
    
  );
}
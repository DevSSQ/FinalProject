import {
  Box,
  Center,
  Stack,
  Text,
  Image,
  Badge,
  Flex,
  } from '@chakra-ui/react';

export default function blogPostWithImage() {
  return (
    <Center py={6}>
      <Box
        maxW={'500px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        >
        <Box
          h={'auto'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>

          <Flex pt={9} gap ={3}>
          <Image
            ml={'5'}
            boxSize='30%'
            src='profile.png'/>
          <Stack direction={'column'} px={'50'} py={'-20'}>
            <Text fontWeight={600} textAlign={'right'} fontSize={'3xl'}>نورة سعد الصالح</Text>
            <Stack align={'center'} justify={'right'} direction={'row'} mt={3}>
            <Badge
              // px={2}
              // py={1}
              // bg={('gray.50')}
              fontSize='0.8em'>
              ترخيص رقم: 891472
            </Badge>
          </Stack>

          <Stack m={2} p={2} fontSize='1em'>
            <Text textAlign={'right'} >حاصل على الماجستير في العلوم المالية مستشار مالي سابق بالتخطيط الاستراتيجي في أرامكو مدرب تطوير شخصي بمعايير الـ ICI & ICF  ومهتم ببث المعرفة المالية ومعد وعي مالي في ثواني ومرشد معتمد </Text>
          </Stack>
          
          </Stack>   
          </Flex>
        
          
        </Box>
      </Box>
    </Center>
  );
}
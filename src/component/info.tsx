import {
  Box,
  Center,
  Stack,
  Text,
  Avatar,
  Badge,
  } from '@chakra-ui/react';

export default function blogPostWithImage() {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
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

          <Stack direction={'column'} align={'left'}>
          <Avatar
            mt={'5'}
            ml={'5'}
            size={'xl'}
            src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'}
          />
            
          <Stack direction={'column'} px={'50'} py={'-20'}>
            <Text fontWeight={600} textAlign={'right'} fontSize={'3xl'}>نورة سعد الصالح</Text>
            <Stack align={'center'} justify={'right'} direction={'row'} mt={3}>
            <Badge
              px={2}
              py={1}
              bg={('gray.50')}
              fontWeight={'400'}>
              ترخيص رقم: 891472
            </Badge>
          </Stack>

          <Stack>
            <Text textAlign={'right'} >حاصل على الماجستير في العلوم المالية مستشار مالي سابق بالتخطيط الاستراتيجي في أرامكو مدرب تطوير شخصي بمعايير الـ ICI & ICF  ومهتم ببث المعرفة المالية ومعد وعي مالي في ثواني ومرشد معتمد </Text>
          </Stack>
          
          </Stack>   
          </Stack>
        
          
        </Box>
      </Box>
    </Center>
  );
}
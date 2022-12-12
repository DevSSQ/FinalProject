import {
    Heading,
    Avatar,
    Box,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Grid,
  } from '@chakra-ui/react';

  export default function SocialProfileSimple() {
    return (
    <Grid 
    dir='rtl'
    mt="10"
    mr={'20'}
    templateColumns='repeat(3, 1fr)'
    gap={6}
    p="10"
    templateRows="repeat(2, 1fr)"
    >
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
          </Stack>
        </Box>
    </Grid>
    
    );
  }  
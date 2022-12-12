import {
    Flex,
    Container,
    Heading,
    Text,
    Avatar,
    Box,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Grid,
  } from '@chakra-ui/react';

  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{base: 20, md:28}}
          >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color = {'#1F5373'}>
            اتخذ قرارك بثقة، و تواصل مع مستشارك{' '}
            <Text as={'span'} color={'#FFC947'}>
            لخططك الاستثمارية
            </Text>
          </Heading>
          <Text color={'#1F5373'} fontSize ={'2xl'}>
          احصل على استشارة مالية حول طريقة للاستثمار 
          والادخار بشكل سريع أينما كنت من خلال استشاريين ماليين 
          متخصصين 
          </Text>
          <Flex w={'full'}>
          </Flex>
        </Stack>
        <Stack
        textAlign={'right'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        px={{base: 20, md:15}}
        >
        <Heading
        fontWeight={600}
        fontSize={'4xl'}
        lineHeight={'110%'}
        color = {'#1F5373'}
        >
            أبرز المستشارين
        </Heading>
        </Stack>

        <Grid templateColumns='repeat(3, 1fr)'mb={50}>
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
      </Container>

    );
  }
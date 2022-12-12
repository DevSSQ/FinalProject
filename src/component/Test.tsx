import {
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  export default function Homeustomer() {
    return (
      <Grid
        dir="rtl"
        mt="10"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        p="10"
        templateRows="repeat(2, 1fr)"
      >
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height="50vh"
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"2xl"}
            padding={5}
          >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://i.pinimg.com/564x/5a/69/b0/5a69b0cc1bb9bb861a386fca5f965648.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={5}
            >
              <Heading fontSize={"sm"} fontFamily={"body"}>
                <Button
                  flex={1}
                  fontSize={"2xl"}
                  rounded={"full"}
                  fontFamily="scheherazade"
                >
                  قسم المُقبلات
                </Button>
              </Heading>
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </GridItem>
  
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height="50vh"
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"2xl"}
            padding={5}
          >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://i.pinimg.com/564x/b2/33/3a/b2333acb65da86fb3ff7adccdaa65d1a.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={5}
            >
              <Heading fontSize={"sm"} fontFamily={"body"}>
                <Button flex={1} fontSize={"2xl"} rounded={"full"}>
                  قسم الأطباق الرئيسية
                </Button>
              </Heading>
  
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </GridItem>
  
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height="50vh"
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"2xl"}
            padding={5}
          >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                borderRadius="10"
                boxSize="100%"
                src={
                  "https://i.pinimg.com/564x/5a/69/b0/5a69b0cc1bb9bb861a386fca5f965648.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={5}
            >
              <Heading fontSize={"sm"} fontFamily={"body"}>
                <Button flex={1} fontSize={"3xl"} rounded={"full"}>
                </Button>
              </Heading>
  
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </GridItem>
  
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height="50vh"
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"2xl"}
            padding={5}
          >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://i.pinimg.com/564x/5a/69/b0/5a69b0cc1bb9bb861a386fca5f965648.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={5}
            >
              <Heading fontSize={"sm"} fontFamily={"body"}>
                <Button flex={1} fontSize={"3xl"} rounded={"full"}>
                  قسم الحلويات
                </Button>
              </Heading>
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height="50vh"
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"2xl"}
            padding={5}
          >
            <Flex flex={1}>
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://i.pinimg.com/564x/5a/69/b0/5a69b0cc1bb9bb861a386fca5f965648.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={5}
            >
              <Heading fontSize={"sm"} fontFamily={"body"}>
                <Button
                  flex={1}
                  fontSize={"3xl"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                  fontFamily="B Hamid"
                >
                  قسم المأكولات الصحية
                </Button>
              </Heading>
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height="50vh"
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"2xl"}
            padding={5}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://i.pinimg.com/564x/5a/69/b0/5a69b0cc1bb9bb861a386fca5f965648.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={5}
            >
              <Heading fontSize={"sm"} fontFamily={"body"}>
                <Button
                  flex={1}
                  fontSize={"3xl"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  المشروبات
                </Button>
              </Heading>
  
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    );
  }
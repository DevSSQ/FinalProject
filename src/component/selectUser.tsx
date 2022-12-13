import { Button, VStack, Box, Flex, Text } from '@chakra-ui/react'

function SelectUser() {

        return (
    <Flex justifyContent='center' alignItems='center' mt={'170px'}>

    <VStack spacing='2rem' width='20rem'>
        <Text fontSize={'30'} textColor={"#1F5373"}>تسجيل مستخدم جديد</Text>

    <Box boxShadow={'xl'}>  <Button textColor={"#1F5373"} bg={'#F2DFA7'} w={'400px'}> مستخدم جديد </Button> </Box>

<Box boxShadow={'xl'}>
            <Button textColor={"#1F5373"} bg={'#F2DFA7'} w={'400px'} > مستشار مالي </Button> </Box>

            </VStack> 
            </Flex>


        )
}
export default SelectUser
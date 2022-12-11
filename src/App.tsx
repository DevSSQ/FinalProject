import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from '../src/component/nav'
import Footer from '../src/component/footer'


export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <Box textAlign="center" fontSize="xl"> */}
      <Nav/>
      <Footer/>
    {/* </Box> */}
  </ChakraProvider>
)

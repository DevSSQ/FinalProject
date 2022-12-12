import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from '../src/component/nav'
import Footer from '../src/component/footer'
// import HomePage from '../src/component/homepage'
// import Cards from '../src/component/consultant'
// import Info from '../src/component/info'
import Register from '../src/component/register'
// import Login from '../src/component/login'


export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav/>
    <Register/>
    {/* <Login/> */}
    {/* <HomePage/>  */}
     {/* <Cards/> */}
    {/* <Info/> */} 
     <Footer/>
  </ChakraProvider>

)

import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from '../src/component/nav'
import Footer from '../src/component/footer'
import HomePage from '../src/component/homepage'
import Cards from '../src/component/consultant'
import Info from '../src/component/info'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPages from '../src/component/register'
import LoginPages from '../src/component/login'
import SelectUser from "./component/selectUser"
import ConProfile from "../src/component/conProfile"
import { Rating } from "./component/rating"
import ProtectedRoute from "./component/protectedRoute"


export const App = () => (
  <BrowserRouter>

  <ChakraProvider theme={theme}>
    <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/selectuser' element={<SelectUser />}></Route>
        <Route path='/login' element={<LoginPages />}></Route>
        <Route path='/register' element={<RegisterPages />}></Route>
        <Route element={<ProtectedRoute />}>
        <Route path='/consultant' element={<Cards />}></Route>
        <Route path='/info' element={<Info />}></Route>
        <Route path='/conprofile' element={<ConProfile />}></Route>
        <Route path='/rating' element={<Rating />}></Route>
        </Route>
     </Routes>
     <Footer/> 
  </ChakraProvider>

</BrowserRouter>
)
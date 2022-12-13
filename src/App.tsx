import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from '../src/component/nav'
import Footer from '../src/component/footer'
import {HomePage} from '../src/component/homepage'
import {Consultant} from '../src/component/consultant'
import Info from '../src/component/info'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPages from '../src/component/register'
import LoginPages from '../src/component/login'
import SelectUser from "./component/selectUser"
import {ConProfile} from "../src/component/ConProfile"
import { Rating } from "./component/rating"
import ProtectedRoute from "./component/protectedRoute"
import Payment2 from "./component/Payment2"
import {RegisterConPages} from "./component/RegisterConPages"



export const App = () => (
  <BrowserRouter>

  <ChakraProvider theme={theme}>
    <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/selectuser' element={<SelectUser />}></Route>
        <Route path='/login' element={<LoginPages />}></Route>
        <Route path='/Userregister' element={<RegisterPages />}></Route>
        <Route path="/register" element={<RegisterConPages />}></Route>
        <Route element={<ProtectedRoute />}>
        <Route path='/consultant' element={<Consultant />}></Route>
        <Route path='/info/:user_id' element={<Info />}></Route>
        <Route path='/conprofile' element={<ConProfile />}></Route>
        <Route path='/rating' element={<Rating />}></Route>
       
        </Route>
        <Route path='/payment' element={<Payment2/>}></Route>
     </Routes>
     <Footer/> 
  </ChakraProvider>

</BrowserRouter>
)
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from './component/Nav'
import Footer from './component/Footer'
import {HomePage} from './component/HomePage'
import {Consultant} from './component/Consultant'
import Info from './component/Info'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPages from './component/Register'
import LoginPages from './component/Login'
import SelectUser from "./component/SelectUser"
import {ConProfile} from "../src/component/ConProfile"
import { Rating } from "./component/Rating"
import ProtectedRoute from "./component/protectedRoute"
import Payment2 from "./component/Payment2"
import {RegisterConPages} from "./component/ConRegister"



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
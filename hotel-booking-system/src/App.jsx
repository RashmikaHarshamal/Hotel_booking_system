import './App.css'
import React from "react";
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Amenities from './Components/Amenities/Amenities'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import Login from './Components/Log/Log'
import AdLogin from './Components/AdLog/AdLog'
import Booking from './Components/Booking/Booking'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import CreateAcc from './Components/CreateAcc/CreateAcc'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import HotelBookingForm from './Components/HotelBookingForm/HotelBookingForm'
import FoodMenu from './Components/FoodMenu/FoodMenu'
import Menu from './Components/Menu/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderLoged from './Components/HeaderLoged/HeaderLoged'
import NavLoged from './Components/NavLoged/NavLoged'
import About from './Components/About/About'
import Rooms from './Components/Rooms/Rooms'
import CartHome from './Components/CartHome/CartHome'

function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}> </Route>
          <Route path="/header" element={<Header/>}> </Route>
          <Route path="/services" element={<Services/>}> </Route>
          <Route path="/rooms" element={<Rooms/>}> </Route>
          <Route path="/foodmenu" element={<FoodMenu/>}> </Route>
          <Route path="/amenities" element={<Amenities/>}> </Route>
          <Route path="/testimonial" element={<Testimonial/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
          
          <Route path="/CreateAccount" element={<CreateAcc/>}> </Route>
          <Route path="/adlogin" element={<AdLogin/>}> </Route>
          <Route path="/log" element={<Login/>}> </Route>
          <Route path="/forgetpassword" element={<ForgetPassword/>}> </Route>
        
          <Route path="/headerloged" element={<HeaderLoged/>}> </Route>
          <Route path="/carthome" element={<CartHome/>}> </Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

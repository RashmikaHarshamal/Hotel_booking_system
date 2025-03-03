import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header2/Header2";
import Services from "./Components/Services/Services";
import Amenities from "./Components/Amenities/Amenities";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Log/Log";
import AdLogin from "./Components/AdLog/AdLog";
import Booking from "./Components/Booking/Booking";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import CreateAcc from "./Components/CreateAcc/CreateAcc";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import HotelBookingForm from "./Components/HotelBookingForm/HotelBookingForm";
import FoodMenu from "./Components/FoodMenu/FoodMenu";
import Menu from "./Components/Menu/Menu";
import HeaderLoged from "./Components/HeaderLoged/HeaderLoged";
import About from "./Components/About/About";
import Rooms from "./Components/Rooms/Rooms";
import CartHome from "./Components/CartHome/CartHome";
import PayRooms from "./Components/PayRooms/PayRooms";
import Home2 from "./Components/Home2/Home2";
import ViewCart from "./Components/ViewCart/ViewCart";

const App = () => {
  const [cart, setCart] = useState([]); // Cart state managed here

  return (
    <BrowserRouter>
      {/* Header2 will be displayed on all pages */}
      {/* <Header2 cart={cart} /> */}
      <Routes>
        {/* Cart-related pages */}
        <Route path="/home2" element={<Home2 cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<ViewCart cart={cart} />} />

        {/* General pages */}
        <Route path="/" element={<Header />} />
        <Route path="/header" element={<Header />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<About />} />

        {/* User account-related pages */}
        <Route path="/CreateAccount" element={<CreateAcc />} />
        <Route path="/adlogin" element={<AdLogin />} />
        <Route path="/log" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Logged-in pages */}
        <Route path="/headerloged" element={<HeaderLoged />} />
        <Route path="/carthome" element={<CartHome />} />
        <Route path="/payrooms" element={<PayRooms />} />
        <Route path="/menu" element={<Menu />} />

        {/* Admin account-related pages */}
        <Route path="/admindashboard" element={<AdminDashboard />} />

        {/* Default route for undefined paths */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

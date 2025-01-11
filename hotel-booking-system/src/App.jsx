import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Rooms from './Components/Rooms/Rooms'
import Amenities from './Components/Amenities/Amenities'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import Login from './Components/Log/Log'
import AdLogin from './Components/AdLog/AdLog'
import Booking from './Components/Booking/Booking'


function App() {

  return (
    <> 
      <Login/>
      <AdLogin/>
      <Booking/>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Rooms/>
      <Amenities/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App

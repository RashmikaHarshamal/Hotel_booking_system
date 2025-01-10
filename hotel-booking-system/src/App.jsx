import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Rooms from './Components/Rooms/Rooms'
import Amenities from './Components/Amenities/Amenities'
import Testimonial from './Components/Testimonial/Testimonial'


function App() {

  return (
    <> 
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Rooms/>
      <Amenities/>
      <Testimonial/>
    </>
  )
}

export default App

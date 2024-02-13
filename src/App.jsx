import './App.css'
import Home from './Components/Home';
import Service from './Components/Service';
import NewCar from './Components/NewCar';
import FeaturedCar from './Components/FeaturedCar';
import Testimonial from './Components/Testimonial';
import Brands from './Components/Brands';
import Contact from './Components/Contact';

function App() {
  const deviceType = window.innerWidth > 464 ? 'desktop' : 'mobile';
  return (
    <>
      <Home />
      <Service />
      <NewCar />
      <FeaturedCar />
      <Testimonial deviceType = {deviceType}/>
      <Brands deviceType = {deviceType}/>
      <Contact />
    </>
  )
}

export default App;

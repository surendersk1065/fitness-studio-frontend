import Navbar from "./common/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fitness from "./components/Fitness"
import Store from "./components/Store"
import Login from "./authentication/Login"
import Home from "./components/Home"
import Signup from "./authentication/Signup"
import Footer from "./common/Footer"
import Mycart from "./components/Mycart"
import Contact from "./components/Contact"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="/home" element = {<> <Navbar /> <Home /><Footer /></>} />
      <Route path="/fitness" element = {<> <Navbar /> <Fitness /><Footer /></>}/>
      <Route path="/store" element = { <><Navbar /><Store /><Footer /></>} />
      <Route path="/mycart" element = { <><Navbar /><Mycart /><Footer /></>} />
      <Route path="/contact" element = { <><Navbar /><Contact /><Footer /></>} />
      <Route path="/login" element = {<Login />} />
      <Route path="/register" element = {<Signup />} />
    </Routes>
    </BrowserRouter>

    </> 
  )
}

export default App

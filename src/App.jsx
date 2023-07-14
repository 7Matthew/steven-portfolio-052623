import Navbar from './components/Navbar.jsx';
import AnimatedBG from "./components/AnimatedBG.jsx";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init({
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease',
        once: 'true',
    });
  }, []);
  return (
    <>  
      <AnimatedBG>
        <Navbar />
        <div className="position-relative">
          <Outlet>
          
          </Outlet>
        </div>
      </AnimatedBG>  
    </>
  );
}



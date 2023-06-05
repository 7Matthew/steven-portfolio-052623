import Navbar from './components/Navbar.jsx';
import AnimatedBG from "./components/AnimatedBG.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
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



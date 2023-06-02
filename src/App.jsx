import Welcome from "./views/Welcome.jsx";
import Navbar from './components/Navbar.jsx';
import AnimatedBG from "./components/AnimatedBG.jsx";
import ConditionalRendering from "./notes/ConditionalRendering.jsx";
import RenderingLists from "./notes/RenderingLists.jsx";
import AddingInteractions from "./notes/AddingInteractions.jsx";

export default function App() {
  return (
    <>  
      <AnimatedBG>
        <Navbar />  
        <Welcome />
      </AnimatedBG>  
    </>
  );
}



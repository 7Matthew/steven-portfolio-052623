import './assets/css/style.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';


export default function App() {
  return (
    <>  
      <div className="area">
        <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Banner />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="row mt-5 text-center introduction">
              <h1 className='introduction'> Hey, I am <b>Steven Matthew!</b></h1>
              <h5>Fullstack Laravel Developer | React Developer</h5>
              <h5>
                See my projects <a href="localhost:3000"><button type='button' className='btn btn-outline-secondary btn-md'> <b>Here!</b> </button></a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}



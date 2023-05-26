import './assets/css/style.css';
import './assets/fontawesome/css/fontawesome.css';
import './assets/fontawesome/css/brands.css';
import './assets/fontawesome/css/solid.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
const HOME = window.location.href;

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
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 header">
            <div className="row mt-5 text-center">
              <h1 className='introduction'> Hey, I am <b>Steven Matthew!</b></h1>
              <h5>Fullstack Laravel Developer | React Developer</h5>
              <h5>
                See my projects <a href={HOME}> <button type='button' className='btn btn-outline-secondary btn-md'> <b>Here!</b> </button> </a>
              </h5>
            </div>
            <div className="row mt-5 text-center">
              <h1><b>Connect with me!</b></h1>
              <h1>
                <a href="https://www.linkedin.com/in/steven-matthew-revillas-6a3467236/" target='__blank'> <i class="fa-brands fa-linkedin fa-lg m-4"></i> </a>
                <a href="https://github.com/7Matthew" target='__blank'> <i class="fa-brands fa-github fa-lg m-4"></i> </a>
                <a href="https://www.facebook.com/itsmeSMR" target='__blank'> <i class="fa-brands fa-facebook fa-lg m-4"></i> </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}



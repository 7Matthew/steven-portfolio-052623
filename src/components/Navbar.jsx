import Brand from '../assets/images/brand.jpg';
import { STEVEN } from '../data';

let steven = STEVEN;

export default function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(94, 203, 255, 1)" }}>
                <div className="container-fluid">
                    <a className="navbar-brand " href={'/'}>
                        <h6> <img src={Brand} alt="Steven" width={40} height={40}></img>  {steven.firstName}</h6>
                    </a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col">
                            
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                            <li className="nav-item">
                                <a href="/welcome#top" className='nav-link'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/welcome#about-me" className='nav-link'>About</a>
                            </li>
                            <li className="nav-item">
                               <a href="/welcome#projects" className='nav-link'> Projects </a>
                            </li>
                            <li className="nav-item">
                                <a href="/welcome#contact-me" className='nav-link'> Contact Me </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
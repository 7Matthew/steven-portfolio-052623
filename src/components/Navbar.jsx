import Brand from '../assets/images/brand.jpg';
import { STEVEN } from '../data';
import { NavLink } from 'react-router-dom';


let steven = STEVEN;

export default function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "rgba(94, 203, 255, 1)" }}>
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
                                <NavLink to="/welcome" className={({ isActive, isPending }) => isPending ? "nav-link text-white pending" : isActive ? "nav-link text-white active" : "nav-link" } >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-me" className={({ isActive, isPending }) => isPending ? "nav-link text-white pending" : isActive ? "nav-link text-white active" : "nav-link" } >
                                    About me
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "nav-link text-white pending" : isActive ? "nav-link text-white active" : "nav-link" } >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-me" className={({ isActive, isPending }) => isPending ? "nav-link text-white pending" : isActive ? "nav-link text-white active" : "nav-link" } >
                                    Contact Me
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/notes" className={({ isActive, isPending }) => isPending ? "nav-link text-white pending" : isActive ? "nav-link text-white active" : "nav-link" } >
                                    Notes
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={" "} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Documents
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href={'/documents/resume'}>Resume</a></li>
                                    <li><a className="dropdown-item" href={'/documents/recommendation-letter'}>Recommendation Letter</a></li>
                                    <li><a className="dropdown-item" href={'/documents/moa'}>MOA</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
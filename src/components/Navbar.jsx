import Brand from '../assets/images/brand.jpg';
import { STEVEN } from '../data';

const HOME = window.location.href;

let steven = STEVEN;

export default function Navbar () {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(94, 203, 255, 1)" }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href={'/'}>
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
                                <a className="nav-link text-white active" aria-current="page" href={'/'}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href={'/about-me'}>About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href={'/Projects'}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href={'/contact-me'}>Contact Me!</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href={'/notes'}>Notes</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" href={HOME} role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
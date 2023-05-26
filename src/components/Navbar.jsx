import Brand from '../assets/images/brand.jpg';

const HOME = window.location.href;

export default function Navbar () {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(94, 203, 255, 1)" }}>
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href={HOME}>
                        <img src={Brand} alt="Steven" width={40} height={40}></img>
                    </a>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link text-white active" aria-current="page" href={HOME}>Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href={HOME}>Contact Me!</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-white dropdown-toggle" href={HOME} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Documents
                                </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href={HOME}>Resume</a></li>
                                <li><a class="dropdown-item" href={HOME}>Reccomendation Letter</a></li>
                                <li><a class="dropdown-item" href={HOME}>MOA</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
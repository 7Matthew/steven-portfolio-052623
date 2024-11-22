import "../assets/css/style.css";
import "../assets/fontawesome/css/fontawesome.css";
import "../assets/fontawesome/css/brands.css";
import "../assets/fontawesome/css/solid.css";
import About from "../components/About";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import { STEVEN } from "../data";

let steven = STEVEN;

export default function Welcome() {
  return (
    <>
      <div className="container p-1" id="top"></div>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function HeroSection() {
  return (
    <>
      <div className="container-fluid my-5" id="top" data-bs-offset="5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 header">
            <div className="row mt-5 text-center">
              <h1 className="introduction">
                {" "}
                Hey, I am <b>{steven.firstName}</b>
              </h1>
              <h5>
                I am a Technology Consultant and an aspiring
                <br /> Software Engineer who is passionate about technology.
              </h5>
              <h5>
                See my projects{" "}
                <a href="#projects">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-md"
                  >
                    {" "}
                    <b>Here!</b>{" "}
                  </button>{" "}
                </a>
              </h5>
            </div>
            <div className="row mt-5 text-center">
              <h1>
                <b>Connect with me, and let's work together!</b>
              </h1>
              <h1>
                <a href={steven.linkedin} target="__blank">
                  {" "}
                  <i className="fa-brands fa-linkedin fa-lg m-4"></i>{" "}
                </a>
                <a href={steven.facebook} target="__blank">
                  {" "}
                  <i className="fa-brands fa-facebook fa-lg m-4"></i>{" "}
                </a>
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Banner />
          </div>
        </div>
      </div>
    </>
  );
}

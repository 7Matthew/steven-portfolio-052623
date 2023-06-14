import { STEVEN } from "../data"; 
import Divider from "./Divider";
import {HtmlSvg, CssSvg, JavascriptSvg, BootstrapSvg, FontawesomeSvg, JquerySvg, JavaSvg, LaravelSvg, ReactSvg, GithubSvg, MySqlSvg, XamppSvg} from "./Svgs"
import { isSmall, isLarge, isMedium, isXSmall } from "./Projects";
import profilePic from "../assets/images/profilePic.png"
import "../assets/css/about.css";
import React from "react";

/** 
 * TODO: Introduce yourself. 
 * TODO: Aim for a friendly, casual tone.
 * TODO: Decide which professional experience to include.
 * TODO: Consider listing awards and accolades.
 * TODO: Add a few personal details.
 * TODO: Include a photo of yourself.
 * TODO: Proofread and edit.
*/

let steven = STEVEN;    

export default function About(){
    return (
        <>  
            <Divider title ="About me"  id="about-me" />
            <div className="container my-5 rounded">
                <Introduction />
                <Experiences />
                <Technologies />
            </div>
        </>
    );
}

function Introduction (){
    return(
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-2">
                    <div className="container text-center bg-white" data-aos="fade-down">
                        <img src={profilePic} alt="" width={"80%"} className="profile-pic rounded"/>
                    </div>  
                </div>
                <div className={
                    isLarge ? "col-lg-6 col-md-12 col-sm-12 col-xs-12" : 
                    isMedium ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center" : 
                    isSmall ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center" : 
                    isXSmall ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center" :
                    "col-lg-6 col-md-12 col-sm-12 col-xs-12" 
                }> 
                    <div className="container-fluid bg-white py-5" data-aos="fade-left">
                        <div className="row">
                            <h3>
                                <p className="text-dark" style={{fontWeight:"bolder", lineHeight:"2.5rem"}}>
                                    <b className="text-info">{steven.firstName} </b>is a Web Developer who has a comprehensive experience in Front-End and Back-End Development.
                                </p>
                            </h3>
                        </div>
                        <div className="row">
                            <h6>
                                <p className="text-secondary" style={{fontWeight:"bolder", lineHeight:"2rem"}}>
                                    He considers himself as a builder and a logician. He is fascinated by the way his works come into view, and how it provides solutions. He has an academic background in Information Technology that helped him to acquire skills such as  <u>Project</u> <u>Management</u>, <u>Back-End</u>, and <u>Front-End Development</u>.
                                </p>
                            </h6>
                        </div>
                        <div className="row">
                            <h6>
                                <p className="text-secondary" style={{fontWeight:"bolder", lineHeight:"2rem"}}>
                                    He recently completed projects that allowed him to be trained in Full Stack Development. He specializes in Laravel framework for Full Stack Web Development with the use of MySql database.
                                </p>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Experiences (){
    return(
        <>
            <div className="row mt-5">
                <div className="col-lg-12 text-center mt-5">
                    <h1><b>Experiences</b></h1>
                </div>
            </div>
            <div className="row text-center p-5 mb-5">
                <div className="col-lg-4 col-md-12 col-sm-12 my-4">
                    <div className="card border-1  p-5 rounded" data-aos="fade-up" >
                        <h1><i className="fa-solid fa-list-check text-info fa-xl mb-5"></i></h1>
                        <h3><b>Project Management</b></h3>
                        <p> Planned, executed, and oversaw projects. Ensured timely completion of deliverables, within budget, and meet quality standards.  </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 my-4">
                    <div className="card border-1  p-5 rounded" data-aos="fade-up" data-aos-delay="200">
                        <h1><i className="fa-solid fa-display text-info fa-xl mb-5"></i></h1>
                        <h3><b>Front-End Developer</b></h3>
                        <p> Planned and executed an engaging user experience by implementing responsive layouts, smooth animations, and interactive features.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 my-4">
                    <div className="card border-1  p-5 rounded" data-aos="fade-up" data-aos-delay="500">
                        <h1><i className="fa-solid fa-gears text-info fa-xl mb-5"></i></h1>
                        <h3><b>Back-End Developer</b></h3>
                        <p> Planned the designs and implements the logic and functionality that powers the website behind the scenes. Focused on the server-side functionality.</p>
                    </div>
                </div>
            </div>     
        </>
    );
}

function Technologies (){
    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-12 text-center mt-5">
                    <h1><b>Technologies</b></h1>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col">
                    <HtmlSvg />
                    <h3><b>HTML</b></h3>
                </div>
                <div className="col">
                    <CssSvg />
                    <h3><b>CSS</b></h3>
                </div>
                <div className="col">
                    <JavascriptSvg />
                    <h3><b>JavaScript</b></h3>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col">
                    <BootstrapSvg />
                    <h3><b>Bootstrap</b></h3>
                </div>
                <div className="col">
                    <FontawesomeSvg />
                    <h3><b>Fontawesome</b></h3>
                </div>
                <div className="col">
                    <JquerySvg />
                    <h3><b>JQuery</b></h3>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col">
                    <JavaSvg />
                    <h3><b>Java</b></h3>
                </div>
                <div className="col">
                    <LaravelSvg />
                    <h3><b>Laravel</b></h3>
                </div>
                <div className="col">
                    <ReactSvg />
                    <h3><b>React</b></h3>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col">
                    <GithubSvg />
                    <h3><b>Github</b></h3>
                </div>
                <div className="col">
                    <MySqlSvg />
                    <h3><b>MySQL</b></h3>
                </div>
                <div className="col">
                    <XamppSvg />
                    <h3><b>Xampp</b></h3>
                </div>
            </div>
        </>
    );
}
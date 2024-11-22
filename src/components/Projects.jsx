import Divider from "./Divider";
import nonongs from "../assets/images/nonongs.jpg";

export const isXSmall = window.innerWidth < 576;
export const isSmall = window.innerWidth >= 576 && window.innerWidth <= 767;
export const isMedium = window.innerWidth >= 768 && window.innerWidth <= 991;
export const isLarge = window.innerWidth >= 992 && window.innerWidth <= 1199;

export default function Projects() {
  return (
    <>
      <Divider title="PROJECTS" />
      <Nonongs />
      {/* <Ocsr /> */}
    </>
  );
}

function Nonongs() {
  return (
    <>
      <div className="container my-5 project rounded">
        <div className="row text-center" data-aos="fade-down">
          <h1 style={{ fontSize: "50px", fontWeight: "bolder" }} id="projects">
            Nonong's POS System
          </h1>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <section className="description">
              <p>
                {" "}
                An internal POS System developed as Capstone Project that aims
                to automate the ordering process sales records, inventory
                management and report generation
              </p>
            </section>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row text-center my-4">
          <div className="col-lg-3">
            <div className="container">
              <div className="row me-3" data-aos="fade-down-right">
                <div className="card border-0">
                  <h3>
                    {" "}
                    <i className="fa-solid fa-cash-register text-info"></i> Main
                    POS
                  </h3>
                  <div className="card p-3 border-0">
                    <p>
                      Automates the ordering process. The cashier will press an
                      Item from the menu, and it will be automatically added to
                      the cart.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row me-3 mt-3" data-aos="fade-up-right">
                <div className="card border-0">
                  <h3>
                    {" "}
                    <i className="fa-solid fa-chart-column text-info"></i> Order
                    History
                  </h3>
                  <div className="card p-3 border-0">
                    <p>
                      Enables tracking of the previous orders, and able to
                      indicate which orders are already paid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3 mb-3">
            <a
              href="https://nonongs.puptcapstone.net"
              target="__blank"
              title="Visit the site!"
            >
              <img
                src={nonongs}
                alt="Pos System"
                className="rounded-circle"
                style={{
                  width: "60%",
                  height: "100%",
                  boxShadow: "5px 5px rgba(0,0,0, .1)",
                }}
                data-aos="fade-up"
              />
            </a>
          </div>
          <div className="col-lg-3">
            <div className="container">
              <div className="row me-3" data-aos="fade-down">
                <div className="card border-0">
                  <h3>
                    {" "}
                    <i className="fa-solid fa-warehouse text-info"></i>{" "}
                    Inventory Management
                  </h3>
                  <div className="card p-3 border-0">
                    <p>
                      Automates the updates of raw ingredients from the
                      inventory whenever an order is made
                    </p>
                  </div>
                </div>
              </div>
              <div className="row me-3 mt-3" data-aos="fade-up">
                <div className="card border-0">
                  <h3>
                    {" "}
                    <i className="fa-regular fa-file text-info"></i> Reports
                  </h3>
                  <div className="card p-3 border-0">
                    <p>
                      Generate reports that are arranged from the data gathered
                      by the system, to provide insight!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center my-4">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-3">
            <a
              href="https://youtu.be/vq-uu5aWuWI"
              target="__blank"
              title="Watch Demo Video"
            >
              <button className="btn btn-outline-primary btn-lg">
                {" "}
                Watch Demo Video{" "}
              </button>
            </a>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

// function Ocsr() {
//   return (
//     <>
//       <div className="container my-5 project rounded p-3 bg-transparent">
//         <div className="row ">
//           <div className="col me-3" data-aos="fade-right">
//             <div
//               className="container bg-info-subtle rounded pt-5 p-5"
//               style={{ backgroundColor: "rgba(94, 203, 255, 1)" }}
//             >
//               <div
//                 className={
//                   isLarge
//                     ? "row"
//                     : isMedium
//                     ? "row text-center"
//                     : isSmall
//                     ? "row text-center"
//                     : isXSmall
//                     ? "row text-center"
//                     : "row"
//                 }
//               >
//                 <h1>
//                   <i className="fa-solid fa-calendar-days fa-lg"></i>
//                 </h1>
//                 <div
//                   className={
//                     isLarge
//                       ? "col-lg-8 col-md-12 col-sm-12 col-xs-12 p-2 text-dark "
//                       : isMedium
//                       ? "col-lg-8 col-md-12 col-sm-12 col-xs-12 p-2 text-dark text-center"
//                       : isSmall
//                       ? "col-lg-8 col-md-12 col-sm-12 col-xs-12 p-2 text-dark text-center"
//                       : isXSmall
//                       ? "col-lg-8 col-md-12 col-sm-12 col-xs-12 p-2 text-dark text-center"
//                       : "col-lg-8 col-md-12 col-sm-12 col-xs-12 p-2 text-dark "
//                   }
//                 >
//                   <h1>Online Course Subject Registration</h1>
//                 </div>
//                 <div className="col-lg-4 p-2"></div>
//               </div>
//               <div className="row">
//                 <div
//                   className={
//                     isLarge
//                       ? "col-lg-4 col-md-12 col-sm-12 col-xs-12"
//                       : isMedium
//                       ? "col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center"
//                       : isSmall
//                       ? "col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center"
//                       : isXSmall
//                       ? "col-lg-8 col-md-12 col-sm-12 col-xs-12 p-2 text-dark text-center"
//                       : "col-lg-4 col-md-12 col-sm-12 col-xs-12"
//                   }
//                 >
//                   <a
//                     href="https://ocrs-online-course-subject-registration.000webhostapp.com/"
//                     target="__blank"
//                   >
//                     <button className="btn btn-dark btn-md p-2">
//                       Take Me There <i className="fa fa-arrow-right"></i>
//                     </button>
//                   </a>
//                 </div>
//                 <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
//                   <img
//                     src="https://ocrs-online-course-subject-registration.000webhostapp.com/img/ocsr.png"
//                     style={{ width: "100%" }}
//                     alt="ocrs"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 me-3">
//             <div className="container-fluid rounded">
//               <div className="row my-3 p-2" data-aos="fade-up" delay="300">
//                 <div className="col-lg-9 col-md-12 col-sm-12 col-xs-9 bg-danger-subtle rounded-end p-4 mb-3 text-center">
//                   <h3>Create</h3>
//                 </div>
//                 <div className="col-lg-3 text-center">
//                   <h1 className=" border border-1 border-dark rounded p-3">
//                     <i className="fa-solid fa-pen-nib fa-lg text-danger"></i>
//                   </h1>
//                 </div>
//               </div>
//               <div className="row my-5 p-2" data-aos="fade-down" delay="500">
//                 <div className="col-lg-3 text-center">
//                   <h1 className=" border border-1 border-dark rounded p-3">
//                     <i className="fa-regular fa-eye fa-lg text-success"></i>
//                   </h1>
//                 </div>
//                 <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 bg-success-subtle rounded-start p-4 text-center mb-3">
//                   <h3>View</h3>
//                 </div>
//               </div>
//               <div className="row my-5 p-2" data-aos="fade-up" delay="700">
//                 <div className="col-lg-9 col-md-12 col-sm-12 col-xs-9 bg-info-subtle rounded-end p-4 mb-3 text-center">
//                   <h3>Update </h3>
//                 </div>
//                 <div className="col-lg-3 text-center">
//                   <h1 className=" border border-1 border-dark rounded p-3">
//                     <i className="text-info fa-solid fa-pen-to-square fa-lg"></i>
//                   </h1>
//                 </div>
//               </div>
//               <div className="row my-5 p-2" data-aos="fade-up" delay="900">
//                 <div className="col-lg-3 text-center">
//                   <h1 className=" border border-1 border-dark rounded p-3">
//                     <i className="text-primary fa-regular fa-calendar fa-lg"></i>
//                   </h1>
//                 </div>
//                 <div className="col-lg-9 col-md-12 col-sm-12 col-xs-9 bg-primary-subtle rounded-start p-4 text-center mb-3">
//                   <h3>Schedule</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Projects(){
    useEffect(() => {
        AOS.init({
            duration: 1500, // values from 0 to 3000, with step 50ms
            easing: 'ease',
        });
      }, []);
    
    return(
        <>
            <div className="container my-5 project rounded">
                <div className="row text-center" data-aos="fade-down">
                    <h1 style={{fontSize:"50px", fontWeight:'bolder'}}>Nonong's POS System</h1>
                    <section className='description'>
                        <p> An internal POS System developed as Capstone Project that aims to automate the ordering process</p>
                        <p> sales records, inventory management and report generation</p>
                    </section>
                </div>
                <div className="row text-center my-4">
                    <div className="col-lg-3">
                       <div className="container">
                            <div className="row me-3" data-aos="fade-down-right">
                                <div className="card border-0">
                                    <h3> <i className="fa-solid fa-cash-register text-info"></i> Main POS</h3>
                                    <div className="card p-3 border-0">
                                        <p>Automates the ordering process. The cashier will press an Item from the menu, and it will be automatically
                                         added to the cart.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row me-3 mt-3" data-aos="fade-up-right">
                                <div className="card border-0">
                                    <h3> <i className="fa-solid fa-chart-column text-info"></i> Order History</h3>
                                    <div className="card p-3 border-0">
                                        <p>Enables tracking of the previous orders, and able to indicate which orders are already paid.</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-lg-6 mt-3 mb-3" >
                        <a href="https://nonongs.puptcapstone.net" target='__blank' title='Visit the site!'>
                            <img 
                                src={'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/301791319_554823959778327_3904387206828962428_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH00orolgEOjio_YRCGzYauKaNUJa5qOcYpo1Qlrmo5xsgXMtxaNzKZ307463UPsMfoU-WL2PZnej8t4khgONr8&_nc_ohc=jfy4r1q9rRwAX9RvlfI&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfAPsYr9ND1Fqh4emsomGrQ-aA1513HcX69sBWrLEtYgYA&oe=6486768F'} 
                                alt="Pos System" 
                                className='rounded-circle'
                                style={{width:"60%", height:"100%", boxShadow: "5px 5px rgba(0,0,0,.2)"}}
                                data-aos="fade-up"
                            />
                        </a>
                    </div>
                    <div className="col-lg-3">
                       <div className="container">
                            <div className="row me-3" data-aos="fade-down">
                                <div className="card border-0">
                                    <h3> <i className="fa-solid fa-warehouse text-info"></i> Inventory Management</h3>
                                    <div className="card p-3 border-0">
                                        <p>Automates the updates of raw ingredients from the inventory whenever an order is made</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row me-3 mt-3" data-aos="fade-up">
                                <div className="card border-0" >
                                    <h3> <i className="fa-regular fa-file text-info"></i> Reports</h3>
                                    <div className="card p-3 border-0">
                                        <p>Generate reports that are arranged from the data gathered by the system, to provide insight!</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="row text-center my-4">
                    <div className="col-lg-3">
                       
                    </div>
                    <div className="col-lg-6 mt-3" >
                        <a href="https://youtu.be/vq-uu5aWuWI" target='__blank' title="Watch Demo Video">
                            <button className="btn btn-outline-primary btn-lg"> Watch Demo Video </button>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        
                    </div>
                </div>
            </div>
        </>
    );
}
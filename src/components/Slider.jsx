import { useState } from 'react';

export default function Slider({ items = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <>
        <div className="container-fluid p-5 bg-dark">
            <div className="row my-4">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 text-center">
                    <img src={items[currentIndex]} alt={currentIndex} style={{width:"60%", height:"auto"}} />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    
                </div>
            </div>
            <div className="row my-4 p-3">
                <div className="col-lg-4 col-md-2 col-sm-2 col-xs-12">
                    
                </div>
                <div className="col-lg-4 text-center">
                    <button className="btn btn-outline-light btn-md me-4" type='button' onClick={goToPrevSlide}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className="btn btn-outline-light btn-md me-4" type='button'  onClick={goToNextSlide}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-2 col-xs-12 " >
                    
                </div>
            </div>
        </div>
    </>
  );
}

import { useState } from "react";
import { foods } from "./food_items";


function Button ({className}){
    const [clicks, setClicks] = useState(0);  

    function handleClick(){
        return setClicks(clicks + 1);
    }
    return (
        <>
            <button className={className} onClick={handleClick}>
                Click count:  {clicks}
            </button>
        </>
    );

}

function Clicker({ onClick, children }) {
    return (
      <button className="btn btn-outline-primary btn-sm me-2" onClick={e => {
        e.stopPropagation(); // stop propagation
        onClick();
      }}>
        {children}
      </button>
    );
}

function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <Clicker onClick={() => alert('Playing!')}>
          Play Movie
        </Clicker>
        <Clicker onClick={() => alert('Uploading!')}>
          Upload Image
        </Clicker>
      </div>
    );
  }

function InputQuantity ({value}){
   
    return(
        <>
            <input type="number" className="form-control my-2 me-2"  value={value} readOnly></input>
        </>
    );
}

function Form() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');

    if (isSent) {
      return <h1>Your message is on its way!</h1>
    }

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}>
        <textarea
          className="form-control"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-sm mt-5">Send</button>
      </form>
    );
}

function sendMessage(message) {
    // ...
}



export default function AddingInteractions() {
    const [quantity, setQuantity] = useState(0);
    const [index, setIndex] = useState(0);
    const hasNext = index < foods.length - 1;
    const hasPrevious = index > 0;

    function handleIncrement(){
        return setQuantity(quantity + 1);
    }

    function handleDecrement(){
        if(quantity > 0)
        return setQuantity(quantity - 1);
    }
    
    function handleNext(){
        if (hasNext) {
            return setIndex(index + 1);
        }
        else return setIndex(0);
    }

    function handlePrevious(){
        if (hasPrevious) {
            return setIndex(index - 1);
        }
        else return setIndex(foods.length - 1);
    }


    function Increment () { 
        return (
            <>
                <button type="button" className="btn btn-outline-success btn-lg me-2" onClick={handleIncrement}> + </button>
            </>
        );
    }
    function Decrement () { 
        return (
            <>
                <button type="button" className="btn btn-outline-danger btn-lg me-2" onClick={handleDecrement}> - </button>
            </>
        );
    }
    
    function Next () {
        return (
            <>
                <button className="btn btn-outline-primary btn-lg m-2" onClick={handleNext}> Next  </button>
            </>
        );
    }

    function Previous () {
        return (
            <>
                <button className="btn btn-outline-warning btn-lg m-2" onClick={handlePrevious}> Previous </button>
            </>
        );
    }

    let food = foods[index];
    return(
        <>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                    <div className="col" >
                        <h1><b>Adding Interactivity to components </b></h1>
                        <div className="container my-2">
                            <h3>Buttons that counts the clicks it received.</h3>
                            <Button className="btn btn-outline-primary btn-xl me-2"></Button>
                            <Button className="btn btn-outline-warning btn-xl me-2"></Button>
                            <Button className="btn btn-outline-success btn-xl me-2"></Button>
                        </div>
                        <div className="container my-2">
                            <h3>Increase or Decrease an input Quantity</h3>
                            <form action="" className="form">
                                <div className="row">
                                    <div className="col-lg-1 col-md-2 col-sm-3">
                                        <Decrement />
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <InputQuantity value={quantity}/>
                                    </div>
                                    <div className="col-lg-1 col-md-2 col-sm-3">
                                        <Increment />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container my-2">
                            <h3>Render a food and be able to next and previous</h3>
                            <Previous />
                            <Next /> 
                            <h5> {food.name} </h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                        
                    </div>
                </div>
                <div className="row" >
                    <div className="col-lg-2 col-md-2 col-sm-12">
        
                    </div>
                    <div className="col">
                        
                        <div className="container my-2">
                            <h3>Responding to Events</h3>
                            <p style={{color:'red'}}>We are trying to stop propagation here by using the stopProgation() function in the button's event handler Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event”. You can use this object to read information about the event. </p>
                            <Toolbar />
                        </div>
                        <div className="container my-2">
                            <p style={{color:'red'}}> preventDefault() function prevents the default behavior of an element. in this case, it prevents the default behavior of the form that is refreshing the page when submitted</p>
                            <form onSubmit={e => {
                            e.preventDefault(); // 
                            alert('Submitting!');
                            }}>
                                <input type="text" placeholder="Input anything" className="form-control" />
                                <button type="submit" className="btn btn-outline-success btn-sm m-2">Send</button>
                            </form>
                        </div>
                        <div className="container my-2">
                            <h3>State as a Snapshot</h3>
                            <p style={{color:'red'}}> In this example, when you press “send”, setIsSent(true) tells React to re-render the UI:</p>    
                            <Form />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                    </div>
                </div>
            </div>
        </>
    );
}

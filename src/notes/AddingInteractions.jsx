import { useState } from "react";
import { foods } from "./food_items";
import Slider from "../components/Slider";
import { useImmer } from 'use-immer';

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
                    <div className="col">
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
                        <div className="container my-2">
                            <h3>Queuing a series of State Updates</h3>
                            <p style={{color:'red'}}>
                            if you would like to update the same state variable multiple times before the next render, instead of passing the next state value like setNumber(number + 1), you can pass a function that calculates the next state based on the previous one in the queue, like setNumber(n {"=>"} n + 1). It is a way to tell React to “do something with the state value” instead of just replacing it.    
                            </p> <a href="https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render" target="__blank"><i className="text-primary">source here</i></a>
                            <Counter />
                            <Slider 
                                items={[
                                    "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/344938281_1422463768500220_1724129367844132282_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH3-cNa2FOLH4DZfJBoXR11IhCTYvL1e1kiEJNi8vV7WZewrerBgZmKSjYQSAnFSbdmAD3uD1kIhXiTdByblqE1&_nc_ohc=4qpA3iYJqfkAX-7v1LT&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfB4Io4uaUzaQV4sueQfDllMql6gRrUqxPEPo2GSyYssKA&oe=648661FC", "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/344274486_6003667826354932_4560760461381389914_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHP5rA9qEWxORojo9JIrGUduNUEGLAiHqy41QQYsCIerKsV2_4U-Qz_WHXvjaHXZ1KzK95qjmzdCcfzCdtjeB78&_nc_ohc=DhyThpxKnxkAX_50kLl&_nc_oc=AQlE-3MeaRks9A7ja9KAAcXUWOAxkrfXEzZGd8WY_FxgtXJKucddLCPz9zNV349DVI8&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfDHJ6PbmrbQU0ePMtAcjncxbZPaFNtdHVaDSukyqkwXXg&oe=64867925","https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/337263607_765394384836606_8484403153570980969_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFqmrIpXJNoJU1dUNCB-13hPmDDtnAXlY8-YMO2cBeVj48RWGUxLU-dU6-5AAKgfeSTQynhxnjI7C3-UZNB6-Uq&_nc_ohc=tFEzLECdAKIAX-zgCaB&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfC_qtAXNmfJdgvOmgARpc2FMBnn6i3HmyKeiBe4xogf7Q&oe=6485E39B","https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/323439495_544011234327233_4402472482597882468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTCfpchWtzGpRSI_zHKlVLqalwAvaYhQGpqXAC9piFATIURstHNcekNrGhGAG1E9iW-GZbtdQ3A0lPJSaEInsr&_nc_ohc=tnYiQuLfTcoAX8O_zwV&_nc_oc=AQnd5pI54-Ipat0AcgUOrsYSEbC2CBQ1NcvK9Zxi5MPoDcy4BPoFAehGgdJ3N1ZhZaI&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfC2uHSuJEw5oFpk3BiWJiUFmoP-gBtdDotT4otC2fNttg&oe=6485A40E","https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/344938281_1422463768500220_1724129367844132282_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH3-cNa2FOLH4DZfJBoXR11IhCTYvL1e1kiEJNi8vV7WZewrerBgZmKSjYQSAnFSbdmAD3uD1kIhXiTdByblqE1&_nc_ohc=4qpA3iYJqfkAX-7v1LT&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfB4Io4uaUzaQV4sueQfDllMql6gRrUqxPEPo2GSyYssKA&oe=648661FC", "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/344274486_6003667826354932_4560760461381389914_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHP5rA9qEWxORojo9JIrGUduNUEGLAiHqy41QQYsCIerKsV2_4U-Qz_WHXvjaHXZ1KzK95qjmzdCcfzCdtjeB78&_nc_ohc=DhyThpxKnxkAX_50kLl&_nc_oc=AQlE-3MeaRks9A7ja9KAAcXUWOAxkrfXEzZGd8WY_FxgtXJKucddLCPz9zNV349DVI8&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfDHJ6PbmrbQU0ePMtAcjncxbZPaFNtdHVaDSukyqkwXXg&oe=64867925","https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/337263607_765394384836606_8484403153570980969_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFqmrIpXJNoJU1dUNCB-13hPmDDtnAXlY8-YMO2cBeVj48RWGUxLU-dU6-5AAKgfeSTQynhxnjI7C3-UZNB6-Uq&_nc_ohc=tFEzLECdAKIAX-zgCaB&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfC_qtAXNmfJdgvOmgARpc2FMBnn6i3HmyKeiBe4xogf7Q&oe=6485E39B","https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/323439495_544011234327233_4402472482597882468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFTCfpchWtzGpRSI_zHKlVLqalwAvaYhQGpqXAC9piFATIURstHNcekNrGhGAG1E9iW-GZbtdQ3A0lPJSaEInsr&_nc_ohc=tnYiQuLfTcoAX8O_zwV&_nc_oc=AQnd5pI54-Ipat0AcgUOrsYSEbC2CBQ1NcvK9Zxi5MPoDcy4BPoFAehGgdJ3N1ZhZaI&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfC2uHSuJEw5oFpk3BiWJiUFmoP-gBtdDotT4otC2fNttg&oe=6485A40E"
                                ]}
                            />
                        </div>
                        <div className="container my-5">
                            <h3>Updating Objects in State</h3>
                            <h5>Copying Object Using Spread (Shallow) </h5>
                            <CopyingObjectUsingSpread />
                            <h5>Copying Object Using Spread (Nested) </h5>
                            <CopyNestedObjectUsingSpread />
                            <h5>Copying Object Using Immer  </h5>
                            <CopyNestedObjectsUsingImmer />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                    </div>
                </div>
            </div>
        </>
    );
}

function CopyNestedObjectsUsingImmer(){
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    
    function handleNameChange(e) {
        updatePerson(draft => {
            draft.name = e.target.value;
        });
    }

    function handleTitleChange(e) {
        updatePerson(draft => {
            draft.artwork.title = e.target.value;
        });
    }

    function handleCityChange(e) {
        updatePerson(draft => {
        draft.artwork.city = e.target.value;
        });
    }

    function handleImageChange(e) {
        updatePerson(draft => {
        draft.artwork.image = e.target.value;
        });
    }
    
    return (
        <>
            <label className="form-label me-2">
                Name:
                <input
                    className="form-control"
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label className="form-label me-2">
                Title:
                <input
                    className="form-control"
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label className="form-label me-2">
                City:
                <input
                    className="form-control"
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label className="form-label me-2">
                Image:
                <input
                    className="form-control"
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
            src={person.artwork.image} 
            alt={person.artwork.title}
            />
        </>
    )
}

function CopyNestedObjectUsingSpread(){
    const [person, setPerson] =useState({ 
        name: 'Steven Matthew',
        artwork: {
            title: 'Taguig',
            city: 'Taguig',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    });
    // ! TO Copy a nested Object, you have to do this: 
    // ! const newArtwork = {...person.artwork, city:"New Delhi"};
    // ! const newPerson = {...person, artwork: newArtwork};

    function handleNameChange(e) {
        setPerson({
          ...person,
          [e.target.name]: e.target.value
        });
    }
    
    function handleArtChange(e){
        setPerson({
            ...person, 
            artwork: {
                ...person.artwork,
                [e.target.name]: e.target.value
            }
        });
    }
    
    return (
        <>
            <label className="form-label me-2">
                Name: <Required />
                <input
                className="form-control bg-secondary-subtle"
                name="name"
                value={person.name}
                onChange={handleNameChange}
                />
            </label>
            <label className="form-label me-2">
                Title: <Required />
                <input
                className="form-control bg-secondary-subtle"
                name="title"
                value={person.artwork.title}
                onChange={handleArtChange}
                />
            </label>
            <label className="form-label me-2">
                City: <Required />
                <input
                className="form-control bg-secondary-subtle"
                name="city"
                value={person.artwork.city}
                onChange={handleArtChange}
                />
            </label>
            <label className="form-label me-2">
                Image: <Required />
                <input
                className="form-control bg-secondary-subtle"
                name="image"
                value={person.artwork.image}
                onChange={handleArtChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
                src={person.artwork.image} 
                alt={person.artwork.title}
                className="image "
            />
        </>
    );
}

function Required(){
    return(
        <>
            <b className="text-danger">*</b>
        </>
    );
}

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

function Counter() {
    const [number, setNumber] = useState(0);
    /**
     * ! To summarize, here’s how you can think of what you’re passing to the setNumber state setter:
    *  ! An updater function (e.g. n => n + 1) gets added to the queue. Any other value (e.g. number 5) adds “replace with 5” to the queue, ignoring what’s already queued.
     */
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}>+3</button>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={number} aria-valuemin="0" aria-valuemax="100" style={{height:20  }}>
            <div className="progress-bar" style={{width:number + '%'}}></div>
        </div>
      </>
    )
  }

function CopyingObjectUsingSpread() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });
  
    function handleChange(e) {
        setPerson({
          ...person,
          [e.target.name]: e.target.value
        });
    }

    return (
      <>
        <label className="form-label m-3">
            First name:
            <input
                name="firstName"
                className="form-control"
                value={person.firstName}
                onChange={handleChange}
            />
        </label>
        <label className="form-label m-3">
            Last name:
            <input
                name="lastName"
                className="form-control"
                value={person.lastName}
                onChange={handleChange}
            />
        </label>
        <label className="form-label m-3">
            Email:
            <input
                name="email"
                className="form-control"
                value={person.email}
                onChange={handleChange}
            />
        </label>
        <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
        </p>
      </>
    );
}
  



import { useState } from "react";
import { useImmer } from "use-immer";

export default function UpdatingObjectsInState(){
    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
                    <div className="col">
                        <h1>Updating Objects in State</h1>
                        <h5>Copying Object Using Spread (Shallow) </h5>
                        <CopyingObjectUsingSpread />
                        <h5>Copying Object Using Spread (Nested) </h5>
                        <CopyNestedObjectUsingSpread />
                        <h5>Copying Object Using Immer  </h5>
                        <CopyNestedObjectsUsingImmer />
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
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
  
function Required(){
    return(
        <>
            <b className="text-danger">*</b>
        </>
    );
}


import { useState } from "react";

export default function UpdatingArraysInState()
{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                    <div className="col">
                        <h1>Updating Arrays in State</h1>
                        <List />
                        <h1>Replacing items in an array</h1>
                        <CounterList />
                        <h1>Sorting a list</h1>
                        <SortList />
                        <h1>Updating Objects in an array</h1>
                        <BucketList />

                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                     
                    </div>
                </div>
            </div>
        </>
    );
}

let nextId = 3;

function List() {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [artists, setArtists] = useState([
        {
            id: 0,
            name: "Steven",
            age: 23
        },
        {   
            id: 1,
            name: "Trisha",
            age: 22
        },
    ]);

    return (
    <>
        <form action="" onSubmit={e => {
            e.preventDefault();
            setArtists([
                ...artists,
                { id: nextId++, name: name, age: age }
            ]);
        }}> 
            <div className="row my-5">
                <div className="col-lg-1">
                    <label htmlFor="name" className="form-label me-3" name="name"> Name: </label>
                </div>
                <div className="col-lg-8">
                    <input type="text" name="name" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-1">
                    <label htmlFor="age" className="form-label me-3" name="age"> Age: </label>
                </div>
                <div className="col-lg-8">
                    <input type="number" name="age" className="form-control" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
            </div>
            <div className="col-lg-3">
                <button type="submit" className="btn btn-outline-primary btn-sm"><i className="fa-solid fa-arrow-right fa-lg"></i></button>
            </div>
        </form>

        <ul>
        {artists.map(artist => (
            <li key={artist.id}>
                {artist.name + " " + artist.age}  
                {/* Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists whose IDs are different from artist.id”. In other words, each artist’s “Delete” button will filter that artist out of the array, and then request a re-render with the resulting array. Note that filter does not modify the original array. */}
                <button className="btn btn-outline-danger btn-sm m-3" 
                onClick={() => {
                setArtists(
                  artists.filter(a =>
                    a.id !== artist.id
                  )
                );
                }}>
                    delete
                </button></li> 
        ))}
        </ul>
    </>
    );
}

let initialCounters = [
  0, 0, 0
];

function CounterList() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );
}

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function SortList() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}
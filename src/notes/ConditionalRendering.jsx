
function Avatar({person, size =100, sex}) {
    sex = sex === 1 ? {possessivePronoun: "Her", pronoun: "She"} : {possessivePronoun: "His", pronoun: "He"};
    return ( 
      <>
        <h1>{sex.possessivePronoun} name is <b style={{color:"red"}}>{person.name}</b>. {sex.pronoun} is {person.age} years old</h1>
        <img
        className="avatar"
        src={"https://i.imgur.com/" + person.imageId + ".jpg"}
        alt={person.name + person.age}
        width={size}
        height={size    }
      />
      </>
      
    );
  }

function Item({ name, isPacked }) {
    let check = isPacked === true ? "✔" : "X"
    let color = isPacked === true ? {color:"green"} : {color:"red"};

    return (
        <>
            <li className="item" style={color}>{name + " " + check} </li>
        </>
    );
}
  
export default function ConditionalRendering (){    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-transparent">
                                <h4>Avatars</h4>
                            </div>
                            <div className="card-body bg-transparent">
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item bg-transparent">
                                        <Avatar person={{name: 'Korra', age: 25, imageId: '1bX5QH6'}} size={100} sex={1}/>
                                    </li>
                                    <li className="list-group-item">
                                        <Avatar person={{name: 'Nestor D. Abnoy', age: 55, imageId: 'OKS67lh'}} sex={0}/>
                                    </li>
                                    <li className="list-group-item">
                                        <Avatar person={{name: 'Mokong', age: 40, imageId: 'YfeOqp2'}} size={200} sex={1}/> 
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                    <div className="col">
                        <section>
                            <h1>Sally Ride's Packing List</h1>
                            <ul>
                                <Item 
                                isPacked={true} 
                                name="Space suit" 
                                />
                                <Item 
                                isPacked={true} 
                                name="Helmet with a golden leaf" 
                                />
                                <Item 
                                isPacked={false} 
                                name="Photo of Tam" 
                                />
                                <Item 
                                isPacked={false} 
                                name="Adult Diaper" 
                                />
                                <Item 
                                isPacked={true} 
                                name="Kitkat" 
                                />
                            </ul>
                        </section>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                </div>
            </div>
            
        </>
    );
}
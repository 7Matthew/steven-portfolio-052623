import { Fragment } from "react";

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

  /**
   * TODO: This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?
   */

function Recipe ({id, name, ingredients}) {
    return (
        <>
        <h2>{name}</h2>
        <ul>
            {ingredients.map(ingredient =>
            <li key={ingredient}>
                {ingredient}
            </li>
            )}
        </ul>
        </>
    );
}

function RecipeList() {
    return (
        <div>
        <h1>Recipes List</h1>
        {
            recipes.map(recipe => 
            <Recipe {...recipe} key={recipe.id} />   
            )
        }
        </div>
    );
}

  
 /**
  * TODO : This array filters  the profession of a person from array 'people'. If the profession is chemist, it will be inserted into an array named 'chemists'
  */
 const chemists = people.filter(person => 
    person.profession === 'chemist'
);  
  

export default function RenderingLists () {
    const list = people.map(person => 
        <Fragment key={person.id}>
            <h5>{person.name}</h5>
            <li>
                { "[" + person.id + "] "}
                {person.profession === 'chemist' ? <b style={{color:'red'}}>{person.name + " : " + person.profession}</b> : <>{person.name + " : " + person.profession}</>}
            </li>
        </Fragment>
    );
    const listChemist = chemists.map(person1 => 
        <li key={person1.id}>{person1.name + " " + person1.profession}</li>
    );

    return (
        <>  
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                    <div className="col">
                        <h1>Rendering Lists</h1>
                        <h3> People</h3>
                        <ul>
                            {list}
                        </ul>
                        <h3> Chemists</h3>
                        <ul>
                            {listChemist}
                        </ul>
                        <RecipeList />  
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">

                    </div>
                </div>
            </div>
            
        </>
    );
}
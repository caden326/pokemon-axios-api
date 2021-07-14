import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]) ;




    const getPokemon = (event) => {
      event.preventDefault();


      axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
        .then(response=>{
          console.log(response);
          setPokemon(response.data.results);
        })
        .catch(err => console.log(err))
    

      // fetch('https://pokeapi.co/api/v2/pokemon/')
      //     .then(response => response.json())
      //     .then(response => {console.log(response); setPokemon(response.results)})
      //     .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <h1>Find Pokemon</h1>
      <form onSubmit={getPokemon}>
        <input type="submit" className="btn btn-lg btn-danger" value="Pokemon"/>
      </form>

      <ul>
        {
          pokemon.map((item, idx) => {
            return <li key={idx}>
                <h1>{item.name}</h1>
              </li>
          })
        }
      </ul>
    </div>
  );
}


export default App;



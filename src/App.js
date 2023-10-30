
import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])

  const getPokemon = () => {
    console.log("Axios button")
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then (response => {
        setPokemon(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <h1>Pokemon via Axios</h1>
      <button onClick={getPokemon}>Fetch Pokemon</button>
      <div>
        <ul>
          {
            pokemon.map((mon, i) => {
              return <li key={i}>{mon.name}</li>
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

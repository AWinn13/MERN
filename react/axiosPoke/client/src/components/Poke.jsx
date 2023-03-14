import React, {useState} from "react";
import axios from 'axios';

const Poke = () => {
    const [poke, setPoke] = useState([])
    const getData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then((response) => {
                setPoke(response.data.results)
            }
            )
        }
  return (
    <div className=" w-50 mx-auto text-center">
        <h1 className="bold">CatchEmAll</h1>
        <button className="btn btn-outline-warning" onClick={getData}>Show Me the Pokemon</button>
        {poke.map((pokemon, index) => {
            return(
            <div className="text-uppercase fw-bold" key={index}>{pokemon.name}</div>
            )}
        )}
        
    </div>
  )
}

export default Poke
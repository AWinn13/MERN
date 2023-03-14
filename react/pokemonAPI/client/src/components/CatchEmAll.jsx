import React, {useState} from "react";

const CatchEmAll = () => {
    const [poke, setPoke] = useState([])
    const fetchData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPoke(response.results)
            }
            )
        }
  return (
    <div className=" w-50 mx-auto text-center">
        <h1 className="bold">CatchEmAll</h1>
        <button className="btn btn-outline-warning" onClick={fetchData}>Show Me the Pokemon</button>
        {poke.map((pokemon, index) => {
            return(
            <div className="text-uppercase fw-bold" key={index}>{pokemon.name}</div>
            )}
        )}
        
    </div>
  )
}

export default CatchEmAll
import axios from "axios"
import { useState } from "react";

const PokeBall = () => {
        const [ pokemon, setPokemons ] = useState([])
        const fetchData = async () => {
            try {
                const { data: {results} } = await axios.get("https://pokeapi.co/api/v2/pokemon/")
                setPokemons(results)
                console.log(results);
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
        return <div>
            This is my Pokeball
        </div>
}

export default PokeBall
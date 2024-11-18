import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon.jsx";

const PokeBall = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchData = async () => {
        try {
            const { data: { results } } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
            setPokemon(results);
        } catch (error) {
            console.error("Error fetching Pokémon list:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {pokemon.map(({ name, url }) => (
                    <li key={name}>
                        <Pokemon name={name} url={url} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokeBall;

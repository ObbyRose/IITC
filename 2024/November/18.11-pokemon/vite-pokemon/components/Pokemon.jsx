import axios from "axios";
import { useState, useEffect } from "react";

const Pokemon = ({ name, url }) => {
    const [details, setDetails] = useState(null);

    const fetchPokemonDetails = async () => {
        try {
            const { data } = await axios.get(url); 
            setDetails(data);
        } catch (error) {
            console.error(`Error fetching details for ${name}:`, error);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, [url]);

    return (
        details ? (
            <div>
                <h1>{name}</h1>
                <div>
                    <h2>Abilities</h2>
                    <ul>
                        {details.abilities.map(({ ability }) => (
                            <li key={ability.name}>{ability.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ) : (
            <p>Loading {name}...</p>
        )
    );
};

export default Pokemon;

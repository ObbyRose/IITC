import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon/Pokemon.jsx";
import styles from "./PokeBall.module.css";

const PokeBall = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
    const fetchData = async () => {
        if (!nextPage) return;
        setLoading(true);
        try {
            const { data } = await axios.get(nextPage);
            const newPokemon = data.results.filter(
                (newPoke) => !pokemon.some((existingPoke) => existingPoke.name === newPoke.name)
            );
            setPokemon((prevPokemon) => [...prevPokemon, ...newPokemon]);
            setNextPage(data.next);
        } catch (error) {
            console.error("Error fetching Pokémon list:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            setLoading(true);
            try {
                const { data: { results, next } } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");
                setPokemon(results);
                setNextPage(next);
            } catch (error) {
                console.error("Error fetching Pokémon list:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInitialData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };
    
    const filteredPokemon = pokemon.filter(poke =>
        poke.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className={styles.card}>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles.searchBar}
            />
            <ul className={styles.pokemonList}>
                {(searchQuery ? filteredPokemon : pokemon).map((poke, index) => (
                    <li key={`${poke.name}-${index}`}>
                        <Pokemon name={poke.name} url={poke.url} />
                    </li>
                ))}
            </ul>
            {loading ? (
                <p>Loading more Pokémon...</p>
            ) : (
                nextPage && <button onClick={fetchData}>Load More</button>
            )}
        </div>
    );
};

export default PokeBall;

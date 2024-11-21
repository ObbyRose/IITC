import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon/Pokemon.jsx";
import styles from "./PokeBall.module.css";

const PokeBall = () => {
    const [pokemon, setPokemon] = useState([]);
    const [displayedPokemon, setDisplayedPokemon] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [displayLimit, setDisplayLimit] = useState(20);

    const fetchAllPokemon = async () => {
        setLoading(true);
        try {
            const { data: { results } } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000");
            setPokemon(results);
            setDisplayedPokemon(results.slice(0, 20));
        } catch (error) {
            console.error("Error fetching Pokémon list:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllPokemon();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    useEffect(() => {
        const filteredPokemon = pokemon.filter((poke) =>
            poke.name.toLowerCase().includes(searchQuery)
        );
        setDisplayedPokemon(filteredPokemon.slice(0, displayLimit));
    }, [searchQuery, pokemon, displayLimit]);

    const handleLoadMore = () => {
        setDisplayLimit((prevLimit) => prevLimit + 20);
    };

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
                {displayedPokemon.map((poke, index) => (
                    <li key={`${poke.name}-${index}`}>
                        <Pokemon name={poke.name} url={poke.url} />
                    </li>
                ))}
            </ul>
            {loading && <p>Loading Pokémon...</p>}
            {displayLimit < pokemon.length && (
                <button onClick={handleLoadMore} className={styles.loadMoreButton}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default PokeBall;

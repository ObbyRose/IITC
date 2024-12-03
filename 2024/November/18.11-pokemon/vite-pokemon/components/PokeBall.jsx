import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon/Pokemon.jsx';
import styles from './PokeBall.module.css';
import DrawerAppBar from '../components/Navbar/Navbar.jsx';

const PokeBall = () => {
    const [pokemon, setPokemon] = useState([]); // All fetched Pokémon
    const [displayedPokemon, setDisplayedPokemon] = useState([]); // Pokémon to display
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayLimit, setDisplayLimit] = useState(20);

    // Fetch Pokémon from the API
    const fetchAllPokemon = async () => {
        setLoading(true);
        try {
            const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000');
            setPokemon(results);
            setDisplayedPokemon(results.slice(0, 20));
        } catch (error) {
            console.error('Error fetching Pokémon list:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchNewPokemonFromLocalStorage = () => {
        const newPokemon = JSON.parse(localStorage.getItem('newPokemon')) || [];
        return newPokemon;
    };

    const getCombinedPokemonList = () => {
        const newPokemon = fetchNewPokemonFromLocalStorage();
        return [...pokemon, ...newPokemon];
    };

    useEffect(() => {
        fetchAllPokemon();
    }, []);

    useEffect(() => {
        const combinedPokemon = getCombinedPokemonList();
        const filteredPokemon = combinedPokemon.filter((poke) =>
            poke.name.toLowerCase().includes(searchQuery)
        );
        setDisplayedPokemon(filteredPokemon.slice(0, displayLimit));
    }, [searchQuery, pokemon, displayLimit]);

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value.toLowerCase());
    }, []);

    const handleLoadMore = () => {
        setDisplayLimit((prevLimit) => prevLimit + 20);
    };

    return (
        <div className={styles.card}>
            <DrawerAppBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />
            <ul className={styles.pokemonList}>
                {displayedPokemon.map((poke, index) => (
                    <li key={poke.id || poke.name + index}> 
                        <Link to={`/pokemon/${poke.name}`}>
                            <Pokemon name={poke.name} url={poke.url || ''} id={poke.id} />
                        </Link>
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

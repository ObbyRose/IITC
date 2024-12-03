import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CustomPokemons.module.css';
import DrawerAppBar from '../Navbar/Navbar';

import fireImg from "/src/assets/fire_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfrc8g2.png";
import waterImg from "/src/assets/water_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfq8w8w.png";
import grassImg from "/src/assets/grass_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqwup7.png";
import electricImg from "/src/assets/electric_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfrnwtw.png";
import normalImg from "/src/assets/normal_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqn3ht.png";
import ghostImg from "/src/assets/ghost_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfr2x1c.png";
import bugImg from "/src/assets/bug_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfsf928.png";
import fightingImg from "/src/assets/fighting_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfrf41z.png";
import psychicImg from "/src/assets/psychic_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqh5to.png";
import iceImg from "/src/assets/ice_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqpn6x.png";
import dragonImg from "/src/assets/dragon_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfruokc.png";
import rockImg from "/src/assets/rock_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqdk3v.png";
import darkImg from "/src/assets/dark_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfrxgkx.png";
import steelImg from "/src/assets/steel_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqbr77.png";
import fairyImg from "/src/assets/fairy_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfrlafa.png";
import groundImg from "/src/assets/ground_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqt8yd.png";
import poisonImg from "/src/assets/poison_type_pokemon_go_wallpaper___qhd___by_elbarnzo_dfqkyl8.png";

const getColorForStat = (statName) => {
    switch (statName) {
        case "hp":
            return "#ff5c5c";
        case "attack":
            return "#ff9b3d";
        case "defense":
            return "#4caf50";
        case "special-attack":
            return "#ff4081";
        case "special-defense":
            return "#3f51b5";
        case "speed":
            return "#03a9f4";
        default:
            return "#9e9e9e";
    }
};

const CustomPokemons = () => {
    const [customPokemons, setCustomPokemons] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedPokemons = JSON.parse(localStorage.getItem('customPokemons')) || [];
        setCustomPokemons(storedPokemons);
        setLoading(false);
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPokemons = customPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const typeToImageMap = {
        fire: fireImg,
        water: waterImg,
        grass: grassImg,
        electric: electricImg,
        normal: normalImg,
        ghost: ghostImg,
        bug: bugImg,
        fighting: fightingImg,
        psychic: psychicImg,
        ice: iceImg,
        dragon: dragonImg,
        rock: rockImg,
        dark: darkImg,
        steel: steelImg,
        fairy: fairyImg,
        ground: groundImg,
        poison: poisonImg,
    };

    const handleCardClick = (pokemonUrl) => {
        navigate(pokemonUrl);
    };

    if (loading) return <p>Loading custom Pokémon...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.container}>
            <DrawerAppBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <div className={styles.pokemonList}>
                {filteredPokemons.length > 0 ? (
                    filteredPokemons.map((pokemon) => (
                        <div
                            key={pokemon.id}
                            className={styles.pokemonCard}
                            style={{
                                backgroundImage: `url(${typeToImageMap[pokemon.types[0]] || "/src/assets/default.png"})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => handleCardClick(pokemon.url)}
                        >
                            <div className={styles.header}>
                                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                                <div className={styles.types}>
                                    {pokemon.types.map((type) => (
                                        <span key={type} className={`${styles.type} ${styles[type]}`}>
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.details}>
                                <p><strong>Height:</strong> {pokemon.height} m</p>
                                <p><strong>Weight:</strong> {pokemon.weight} kg</p>
                                <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>

                                <div className={styles.stats}>
                                    {Object.keys(pokemon.stats).map((statName) => (
                                        <div key={statName} className={styles.statRow}>
                                            <p><strong>{statName.charAt(0).toUpperCase() + statName.slice(1)}:</strong> {pokemon.stats[statName]}</p>
                                            <div
                                                className={styles.statBar}
                                                style={{
                                                    backgroundColor: getColorForStat(statName),
                                                    width: `${Math.min(pokemon.stats[statName], 100)}%`, // Ensure the bar does not exceed 100%
                                                }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.abilities}>
                                    <strong>Abilities:</strong>
                                    <ul>
                                        {pokemon.abilities && pokemon.abilities.map((ability, index) => (
                                            <li key={index}>{ability}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No custom Pokémon found.</p>
                )}
            </div>
        </div>
    );
};

export default CustomPokemons;

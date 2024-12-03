import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CustomPokemons.module.css";
import DrawerAppBar from "../Navbar/Navbar";

// Img imports for background types
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

const CustomPokemons = () => {
    const [customPokemons, setCustomPokemons] = useState([]);

    useEffect(() => {
        const storedPokemons = JSON.parse(localStorage.getItem("customPokemons") || "[]");
        setCustomPokemons(storedPokemons);
    }, []);

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

    const handleCardClick = (id) => {
        console.log(`Navigating to details for Custom Pokémon ID: ${id}`);
    };

    return (
        <div>
            <DrawerAppBar />
        <div className={styles.customPokemonsContainer}>
            <h1>Custom Pokémon Collection</h1>
            <div className={styles.pokemonList}>
                {customPokemons.map((pokemon) => {
                    const { id, name, types, height, weight, abilities, gifUrl } = pokemon;
                    const primaryType = types?.[0]?.name || "normal";
                    return (
                        <div
                            className={styles.card}
                            key={id}
                            style={{
                                backgroundImage: `url(${typeToImageMap[primaryType] || "/src/assets/default.png"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            onClick={() => handleCardClick(id)}
                        >
                            <div className={styles.header}>
                                <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                                <div className={styles.types}>
                                    {types.map((type) => (
                                        <span key={type.name} className={`${styles.type} ${styles[type.name]}`}>
                                            {type.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.image}>
                                {gifUrl ? (
                                    <img src={gifUrl} alt={`${name} animated`} />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <div className={styles.footer}>
                                <p>Height: {(height / 10).toFixed(1)} m</p>
                                <p>Weight: {(weight / 10).toFixed(1)} kg</p>
                            </div>
                            <div className={styles.abilities}>
                                <h3>Abilities</h3>
                                <ul>
                                    {abilities?.map((ability) => (
                                        <li key={ability.name}>
                                            {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};

export default CustomPokemons;

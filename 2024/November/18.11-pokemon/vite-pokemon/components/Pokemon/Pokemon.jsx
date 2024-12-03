import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pokemon.module.css";

// Img imports for background
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

const Pokemon = ({ name, url, id }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchPokemonDetails = async () => {
        if (!url || typeof url !== "string" || !url.trim()) {
            console.error("Invalid URL provided:", url);
            setError("Invalid URL: URL is required to fetch Pokémon details.");
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.get(url);
            setDetails(data);
        } catch (error) {
            console.error("Error during API request:", error);
            setError(error.message || "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!url || typeof url !== "string" || !url.trim()) {
            setError("Invalid URL provided");
            setLoading(false);
            return;
        }

        fetchPokemonDetails();
    }, [url]);

    if (loading) return <p>Loading {name}...</p>;
    if (error) return <p>Error: {error}</p>;

    const { sprites, types, stats, abilities, height, weight, base_experience } = details;
    const primaryType = types?.[0]?.type?.name || "unknown";

    const gifUrl =
        sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default ||
        sprites?.front_default;

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

    const handleCardClick = () => {
        console.log(`Navigating to details for ID: ${url}`);
        navigate(url);
    };

    return (
        <div
            className={`${styles.card}`}
            style={{
                backgroundImage: `url(${typeToImageMap[primaryType] || "/src/assets/default.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={handleCardClick}
        >
            <div className={styles.header}>
                <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                <div className={styles.types}>
                    {types.map(({ type }) => (
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
            <div className={styles.stats}>
                {stats.map(({ stat, base_stat }) => (
                    <div key={stat.name} className={styles.stat}>
                        <span className={styles.statName}>{stat.name}</span>
                        <div className={styles.statBarContainer}>
                            <div
                                className={styles.statBar}
                                style={{
                                    width: `${Math.min(base_stat, 100)}%`,
                                    backgroundColor: getColorForStat(stat.name),
                                }}
                            ></div>
                        </div>
                        <span className={styles.statValue}>{base_stat}</span>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                <p>Height: {(height / 10).toFixed(1)} m</p>
                <p>Weight: {(weight / 10).toFixed(1)} kg</p>
                <p>Base XP: {base_experience}</p>
            </div>
            <div className={styles.abilities}>
                <h3>Abilities</h3>
                <ul>
                    {abilities.map(({ ability }) => (
                        <li key={ability.name}>
                            {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

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

export default Pokemon;
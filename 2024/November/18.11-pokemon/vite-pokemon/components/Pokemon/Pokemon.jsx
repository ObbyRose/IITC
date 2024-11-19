import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ name, url }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPokemonDetails = async () => {
        try {
            const { data } = await axios.get(url);
            setDetails(data);
        } catch (error) {
            console.error(`Error fetching details for ${name}:`, error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, [url]);

    if (loading) return <p>Loading {name}...</p>;
    if (!details) return <p>Error loading {name}. Please try again.</p>;

    const { sprites, types, stats, abilities, height, weight, base_experience } = details;

    const primaryType = types[0].type.name;

    const gifUrl =
        sprites?.versions?.["generation-v"]?.animated?.front_default || sprites?.front_default;

    return (
        <div className={`${styles.card} ${styles[primaryType]}`}>
            <div className={styles.header}>
                <h1>{name}</h1>
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
                    <p>No animated GIF available</p>
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
                                    width: `${(base_stat > 100 ? 100 : base_stat) / 100 * 100}%`,
                                    backgroundColor: getColorForStat(stat.name),
                                }}
                            ></div>
                        </div>
                        <span className={styles.statValue}>{base_stat}</span>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                <p>Height: {height / 10} m</p>
                <p>Weight: {weight / 10} kg</p>
                <p>Base XP: {base_experience}</p>
            </div>
            <div className={styles.abilities}>
                <h3>Abilities</h3>
                <ul>
                    {abilities.map(({ ability }) => (
                        <li key={ability.name}>{ability.name}</li>
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

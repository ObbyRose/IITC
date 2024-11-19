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

    // Loading state
    if (loading) return <p>Loading {name}...</p>;
    if (!details) return <p>Error loading {name}. Please try again.</p>;

    const { sprites, types, stats, abilities, height, weight, base_experience } = details;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h1>{name}</h1>
                <div className={styles.types}>
                    {types.map(({ type }) => (
                        <span key={type.name} className={styles.type}>
                            {type.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.image}>
                <img src={sprites.front_default} alt={`${name} sprite`} />
            </div>
            <div className={styles.stats}>
                {stats.map(({ stat, base_stat }) => (
                    <p key={stat.name}>
                        {stat.name}: {base_stat}
                    </p>
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

export default Pokemon;

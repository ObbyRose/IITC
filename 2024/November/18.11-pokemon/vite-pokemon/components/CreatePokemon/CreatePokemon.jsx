import React, { useState } from 'react';
import styles from './CreatePokemon.module.css';
import DrawerAppBar from '../CardNavbar/CardNavbar.jsx';

const CreatePokemon = () => {
    const [name, setName] = useState('');
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);

    const handleTypesChange = (e) => {
        setTypes([...e.target.selectedOptions].map((option) => option.value));
    };

    const handleAbilitiesChange = (e) => {
        setAbilities([...e.target.selectedOptions].map((option) => option.value));
    };

    const handleHeightChange = (e) => setHeight(e.target.value);
    const handleWeightChange = (e) => setWeight(e.target.value);
    const generateRandomID = () => {
        return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !types.length || !abilities.length || !height || !weight) {
            setError('All fields are required!');
            return;
        }
    
        setLoading(true);
        try {
            const newPokemon = {
                name,
                types,
                abilities,
                height,
                weight,
                id: generateRandomID(),
                url: '',
            };
    
            const storedPokemons = JSON.parse(localStorage.getItem('newPokemon')) || [];
            storedPokemons.push(newPokemon);
            localStorage.setItem('newPokemon', JSON.stringify(storedPokemons));
            setName('');
            setTypes([]);
            setAbilities([]);
            setHeight('');
            setWeight('');
            setError('');
        } catch (err) {
            setError('Error creating Pokémon. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <DrawerAppBar />
            <div className={styles.container}>
                <h2>Create New Pokémon</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Pokémon Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                            placeholder="Enter Pokémon name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="types">Types</label>
                        <select
                            id="types"
                            multiple
                            value={types}
                            onChange={handleTypesChange}
                            required
                        >
                            <option value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="grass">Grass</option>
                            <option value="electric">Electric</option>
                            <option value="normal">Normal</option>
                            <option value="ghost">Ghost</option>
                            <option value="bug">Bug</option>
                            <option value="fighting">Fighting</option>
                            <option value="psychic">Psychic</option>
                            <option value="ice">Ice</option>
                            <option value="dragon">Dragon</option>
                            <option value="rock">Rock</option>
                            <option value="dark">Dark</option>
                            <option value="steel">Steel</option>
                            <option value="fairy">Fairy</option>
                            <option value="ground">Ground</option>
                            <option value="poison">Poison</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="abilities">Abilities</label>
                        <select
                            id="abilities"
                            multiple
                            value={abilities}
                            onChange={handleAbilitiesChange}
                            required
                        >
                            <option value="overgrow">Overgrow</option>
                            <option value="blaze">Blaze</option>
                            <option value="torrent">Torrent</option>
                            <option value="intimidate">Intimidate</option>
                            <option value="keen-eye">Keen Eye</option>
                            <option value="levitate">Levitate</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="height">Height (m)</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={handleHeightChange}
                            required
                            placeholder="Enter height in meters"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="weight">Weight (kg)</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={handleWeightChange}
                            required
                            placeholder="Enter weight in kilograms"
                        />
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Creating Pokémon...' : 'Create Pokémon'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePokemon;

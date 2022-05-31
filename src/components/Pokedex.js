import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const user = useSelector(state => state.user);
    const [ inputPokemon, setInputPokemon ] = useState("");
    const [ types, setTypes ] = useState([]);

    const [ pokemones, setPokemones ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5')
            .then(res => setPokemones(res.data.results));
        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results));
    }, []);

    const search = () => {
        navigate(`/pokedex/${inputPokemon}`);
    };

    const filterPokemones = e => {
        if(e.target.value === "all"){
            axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5')
                .then(res => setPokemones(res.data.results));
        } else {
            axios.get(e.target.value)
                .then(res => setPokemones(res.data.pokemon));
        }
    };

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Bienvenido, {user}</h2>
            <select onChange={filterPokemones}>
                <option value="all">All types</option>
                {
                    types.map(type => (
                        <option key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div>
                <input type="text" value={inputPokemon} onChange={e => setInputPokemon(e.target.value)} placeholder="Buscar pokemon"/>
                <button onClick={search}>Buscar</button>
            </div>
            {
                pokemones.map(pokemon => (
                    <PokemonCard key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} url={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />
                ))
            }
        </div>
    );
};

export default Pokedex;
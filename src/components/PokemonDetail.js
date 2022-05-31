import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [ pokemon, setPokemon ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data));
    }, [ id ]);

    return (
        <div>
            <h1>PokemonDetail</h1>
            <p>Accediendo al Pokemon con id: {id}</p>
            <p>Nombre: {pokemon.name}</p>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokemonDetail;
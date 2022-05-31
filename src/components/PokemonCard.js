import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [ pokemon, setPokemon ] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
         .then(res => setPokemon(res.data))
    }, [ url ]);

    return (
        <div className="card" onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            </div>
        </div>
    );
};

export default PokemonCard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import imgPokedex from '../images/pokedex.jpg';

const UserInput = () => {

    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () => {
        dispatch(setUser(userName));
        navigate("/pokedex");
    }

    return (
        <div>
            <img src={imgPokedex} alt="" />
            <h1>Hello Trainer!</h1>
            <p>To start, give me your name</p>
            <form>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
                <button onClick={getName}>Get started!</button>
            </form>
        </div>
    );
};

export default UserInput;
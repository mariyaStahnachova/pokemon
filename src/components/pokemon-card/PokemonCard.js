import React, {useEffect, useState} from 'react';
import css from "../Layout/pokemonPage.module.css";
import axios from "axios";

const PokemonCard = ({url, name}) => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setProfile(res.data)
            })
    }, [])

    return (
        <div className={css.item}>
            <p>{profile && name}</p>
            <img src={profile && profile.sprites.other.dream_world.front_default} alt=""/>
        </div>
    );
};

export default PokemonCard;
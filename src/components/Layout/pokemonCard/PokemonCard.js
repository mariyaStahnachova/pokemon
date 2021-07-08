import React, {useEffect, useState} from 'react';
import css from "./pokemonCard.module.css";
import axios from "axios";
import InfoPokemonModal from "../../infoPokemonModal/infoPokemonModal";

const PokemonCard = (props) => {
    const [profile, setProfile] = useState(null)
    const [isModalOpen, setModalState] = useState(false)


    useEffect(() => {
        axios.get(props.url)
            .then(res => {
                setProfile(res.data)
            })
    }, [])


    const closeInfoModal=()=>{
        setModalState(false)
    }
    const openInfoModal=()=>{
        setModalState(true)
    }

    return (
        <>
        {isModalOpen && <InfoPokemonModal
            key={props.name}
            onClick={closeInfoModal}
            prop={profile}
        />}
        <div className={css.item} onClick={openInfoModal}>
           <img src={profile && profile.sprites.other.dream_world.front_default} alt=""/>
        </div>
        </>
    );
};

export default PokemonCard;
import React, {useEffect, useState} from 'react';
import css from "./pokemonCard.module.css";
import axios from "axios";
import InfoPokemonModal from "../../infoPokemonModal/infoPokemonModal";

interface SRC {
    other:{
        dream_world:{
            front_default:string
        }
    }
}

export interface Profile {
    name:string,
    abilities:[],
    types:[],
    sprites:SRC
}

const PokemonCard : React.FC<{url:string, name:string}> = (props) => {
    const [profile, setProfile] = useState<Profile |undefined>(undefined)
    const [isModalOpen, setModalState] = useState<boolean>(false)


    useEffect(() => {
        axios.get(props.url)
            .then(res => {
                setProfile(res.data)
            })
    }, [])


    const closeInfoModal=():void=>{
        setModalState(false)
    }
    const openInfoModal=():void=>{
        setModalState(true)
    }


    return (
        <>
        {isModalOpen && <InfoPokemonModal
            key={props.name}
            onClick={closeInfoModal}
            profile={profile}

        />}
        <div className={css.item} onClick={openInfoModal}>
           <img src={profile && profile.sprites.other.dream_world.front_default} alt=""/>
        </div>
        </>
    );
};

export default PokemonCard;
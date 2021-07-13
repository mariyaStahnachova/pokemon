import React, {useContext} from 'react';
import Modal from "../UI/Modal/Modal";
import InfoCard from "../Layout/infoCard/infoCard";
import {Profile} from "../Layout/pokemonCard/PokemonCard";

const InfoPokemonModal: React.FC<{  profile:Profile | undefined, onClick:()=>void}> = (props) => {
    console.log(props)

    return (
        <Modal onClick={props.onClick}>
            <InfoCard
                card={true}
                name={props.profile!.name}

                src={props.profile!.sprites.other.dream_world.front_default}

                abiltties={props.profile!.abilities}

                types={props.profile!.types}
            />
        </Modal>
    );
};

export default InfoPokemonModal;
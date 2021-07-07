import React, {useContext} from 'react';
import Modal from "../UI/Modal/Modal";
import InfoCard from "../Layout/infoCard/infoCard";
const InfoPokemonModal = (props) => {
    console.log(props)

    return (
        <Modal onClick={props.onClick}>
            <InfoCard
                name={props.prop.name}
                src={props.prop.sprites.other.dream_world.front_default}
                abiltties={props.prop.abilities}
                types={props.prop.types}
            />
        </Modal>
    );
};

export default InfoPokemonModal;
import React from 'react';
import Modal from "../UI/Modal/Modal";

const InfoPokemonModal = (props) => {
    return (
        <Modal>
            <h1>{props.name}</h1>
            <button onClick={props.onClick}>Close</button>
        </Modal>
    );
};

export default InfoPokemonModal;
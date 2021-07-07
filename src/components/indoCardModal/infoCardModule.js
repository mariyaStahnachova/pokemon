import React from 'react';
import Modal from '../UI/Modal/Modal'

const InfoCardModule = (props) => {
    return (
        <Modal onClick={props.onClick}>
            <p>Your team</p>

        </Modal>
    );
};

export default InfoCardModule;
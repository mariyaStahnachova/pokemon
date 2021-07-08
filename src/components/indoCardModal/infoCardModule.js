import React, {useContext} from 'react';
import Modal from '../UI/Modal/Modal'
import CartContext from "../store/cartContext";
import InfoCard from "../Layout/infoCard/infoCard";

const InfoCardModule = (props) => {
    const ctx = useContext(CartContext)
    console.log(ctx)
    return (
        <Modal onClick={props.onClick}>
            <p>Your team</p>
            {
                ctx.items.map(el=>
                    // console.log(el)
                    <InfoCard
                        key={el.src}
                        name={el.name}
                        src={el.src}
                        abiltties={el.abilities}
                        types={el.types}>
                    </InfoCard>
                )
            }

        </Modal>
    );
}

export default InfoCardModule;
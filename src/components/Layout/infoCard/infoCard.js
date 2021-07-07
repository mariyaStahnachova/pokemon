import React, {useContext} from 'react';
import css from './infoCard.module.css'
import CartContext from "../../store/cartContext";

const InfoCard = (props) => {
    const ctx= useContext(CartContext)

    console.log(props)
    const addHandler = ()=>{
        ctx.add(props)
    }

    return (
        <>
        <h1>{props.name}</h1>
    <div className={css.main}>
        <img src={props.src} alt=''/>
        <div className={css.innerRow}>
            <div className={css.inner}>
                <div>
                    <p className={css.text}>Abilities</p>
                    <div className={css.row}>
                        {props.abiltties.map(el=>{
                            return <div className={css.disc}>{el.ability.name}</div>
                        })}
                    </div>

                </div>
                <div>
                    <p className={css.text}>Types</p>
                    <div className={css.row}>
                        {props.types.map(el=>{
                            return <div className={css.disc}>{el.type.name}</div>
                        })}
                    </div>

                </div>
            </div>
            <div className={css.actions}>
                <button onClick={addHandler}>Add to team</button>
            </div>

        </div>
    </div>
        </>

);
};

export default InfoCard;
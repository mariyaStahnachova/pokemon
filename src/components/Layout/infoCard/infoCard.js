import React, {useContext} from 'react';
import css from './infoCard.module.css'
import CartContext from "../../store/cartContext";

const InfoCard = (props) => {
    const ctx= useContext(CartContext)
    const addHandler = ()=>{
        ctx.add(props)
    }
    const likeHandler=()=>{
        ctx.like(props)
    }
    const removeHandler=()=>{
        ctx.remove(props.name)
    }

    return (
        <>
        <h1>{props.name}</h1>
    <div className={css.main}>
        <img src={props.src} alt=''/>
        <div className={css.innerRow}>
            <div className={css.inner}>
                <div className={css.column}>
                    <p className={css.text}>Abilities</p>
                    {/*<div className={css.row}>*/}
                    {/*    {props.abiltties.map(el=>{*/}
                    {/*        console.log(el.ability.name)*/}
                    {/*        // return <div className={css.disc} >{el.ability.name}</div>*/}
                    {/*    })}*/}
                    {/*    {props.abiltties.map(el=>{*/}
                    {/*        return <div className={css.disc} >{el.ability.name}</div>*/}
                    {/*    })}*/}
                    {/*</div>*/}

                </div>
                <div className={css.column}>
                    <p className={css.text}>Types</p>
                    <div className={css.row}>
                        {props.types.map(el=>{
                            return <div className={css.disc} >{el.type.name}</div>
                        })}
                    </div>

                </div>
            </div>
            <div className={css.actions}>
                {props.card && <button onClick={addHandler}>Add to team</button>}
                {props.card && <button onClick={likeHandler}>Like</button>}
                {!props.card && <button onClick={removeHandler}>Remove</button>}
            </div>

        </div>
    </div>
        </>

);
};

export default InfoCard;
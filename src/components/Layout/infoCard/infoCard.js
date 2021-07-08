import React, {useContext} from 'react';
import css from './infoCard.module.css'
import CartContext from "../../store/cartContext";
import {useDispatch} from "react-redux";

const InfoCard = (props) => {
    const dispatch = useDispatch()

    const addHandler = ()=>{
        dispatch({type:'ADD', item:props})
    }
    const likeHandler=()=>{
        dispatch({type:'LIKE',item:props})
    }
    const removeHandler=()=>{
        dispatch({type:'REMOVE',name:props.name})
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
                        {props.types.map((el,index)=>{
                            return <div key={index} className={css.disc} >{el.type.name}</div>
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
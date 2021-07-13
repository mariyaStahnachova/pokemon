import React, {useState} from 'react';
import css from './infoCard.module.css'
import {useDispatch} from "react-redux";
import {add,like, remove} from "../../storeRedux/mainReducer";
import Button from "../../UI/Button/Button";

const InfoCard = (props) => {
    const dispatch = useDispatch()


    const addHandler = ()=>{
        dispatch(add(props))
    }
    const likeHandler=()=>{
        dispatch(like(props))
    }
    const removeHandler=()=>{
        dispatch(remove(props.name))
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
                    <div className={css.row}>
                        { props.card && props.abiltties.map((el,index)=>{
                         return <div key={index} className={css.disc} >{el.ability.name}</div>
                        })}
                    </div>

                </div>
                <div className={css.column}>
                    <p className={css.text}>Types</p>
                    <div className={css.row}>
                        { props.types.map((el,index)=>{
                            return <div key={index} className={css.disc} >{el.type.name}</div>
                        })}
                    </div>

                </div>
            </div>
            <div className={css.actions}>
                {props.card && <Button onClick={addHandler}>Add to card</Button>}
                {props.card && <Button onClick={likeHandler}>Like</Button>}
                {!props.card && <Button onClick={removeHandler}>Remove</Button>}
            </div>

        </div>
    </div>
        </>

);
};

export default InfoCard;
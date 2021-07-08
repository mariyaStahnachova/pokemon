import React, {useContext, useEffect, useState} from 'react';
import css from './HeaderButton.module.css'
import CartContext from "../../store/cartContext";
import {useSelector} from "react-redux";


const HeaderButton = () => {
    const badge = useSelector(store=>store.amount)
    return (
        <button className={css.button} >
            <span>Your team</span>
            <span className={css.badge}>{badge}</span>
        </button>
    );
};

export default HeaderButton;
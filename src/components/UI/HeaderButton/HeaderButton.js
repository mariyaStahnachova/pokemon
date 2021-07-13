import React from 'react';
import css from './HeaderButton.module.css'
import {useSelector} from "react-redux";


const HeaderButton = () => {
    const badge = useSelector(store=>store.app.amount)
    return (
        <button className={css.button} >
            <span>Your team</span>
            <span className={css.badge}>{badge}</span>
        </button>
    );
};

export default HeaderButton;
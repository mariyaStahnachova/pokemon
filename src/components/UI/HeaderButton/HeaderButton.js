import React, {useContext, useEffect, useState} from 'react';
import css from './HeaderButton.module.css'
import CartContext from "../../store/cartContext";


const HeaderButton = () => {

    const ctx = useContext(CartContext)
    const [isButtonOn, setButtonOn] = useState(false)
    const btnClasses = `${css.button} ${isButtonOn ? css.bump : ''}`
    return (
        <button className={btnClasses} >
            <span>Your team</span>
            <span className={css.badge}>{ctx.amount}</span>

        </button>
    );
};

export default HeaderButton;
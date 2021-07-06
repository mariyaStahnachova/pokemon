import React, {useContext, useEffect, useState} from 'react';
import css from './HeaderButton.module.css'


const HeaderButton = () => {

    const [isButtonOn, setButtonOn] = useState(false)
    const btnClasses = `${css.button} ${isButtonOn ? css.bump : ''}`
    return (
        <button className={btnClasses} >
            <span>Your team</span>
            <span className={css.badge}>0</span>

        </button>
    );
};

export default HeaderButton;
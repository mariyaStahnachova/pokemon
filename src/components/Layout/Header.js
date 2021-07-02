import React, {Fragment} from 'react';
import css from './Header.module.css'
import HeaderButton from "./UI/HeaderButton";
const Header = () => {
    return (
        <Fragment>
            <header className={css.header}>
                <h1>Get your team together</h1>
                <HeaderButton/>
            </header>
            <div className>

            </div>
        </Fragment>
    );
};

export default Header;
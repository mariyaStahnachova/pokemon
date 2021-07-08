import React from 'react';
import css from './Header.module.css'
import HeaderButton from "../../UI/HeaderButton/HeaderButton";
import {Link} from "react-router-dom";



const Header = () => {


    return (
        <>
            <header className={css.header}>
               <Link style={{ textDecoration: 'none' }} to='/'> <h1>Get your team together</h1></Link>
                <Link style={{ textDecoration: 'none' }} to='/team'><HeaderButton /></Link>
            </header>
            <div>

            </div>
        </>
    );
}

export default Header;
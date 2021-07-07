import React, {Fragment, useState} from 'react';
import css from './Header.module.css'
import HeaderButton from "../../UI/HeaderButton/HeaderButton";
import InfoCardModule from "../../indoCardModal/infoCardModule";



const Header = () => {

    const [isCartShown, showCart] = useState(false)

    const showCartModal=()=>{
        showCart(true)
    }
    const hideCart=()=>{
        showCart(false)
    }

    return (
        <>
            { isCartShown && <InfoCardModule onClick={hideCart}/>}
            <header className={css.header}>
                <h1>Get your team together</h1>
                <HeaderButton onClick={showCartModal}/>
            </header>
            <div>

            </div>
        </>
    );
}

export default Header;
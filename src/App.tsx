import React from 'react';
import './App.css';
import Header from "./components/Layout/Header/Header";
import {Route, Switch} from "react-router";
import PokemonsPage from "./components/Layout/pokemonPage/pokemonsPage";
import CartContext from './components/store/cartContext';
import CartProvider from "./components/cartProvider/cartProvider";



function App() {
    return (

        <div className="App">
            <CartProvider>
            <Header/>
            <Switch>
            <Route exact={true} path='/' component={PokemonsPage} />
            </Switch>
            </CartProvider>
        </div>

    );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./components/Layout/Header/Header";
import {Route, Switch} from "react-router";
import PokemonsPage from "./components/Layout/pokemonPage/pokemonsPage";
import CartContext from './components/store/cartContext';
import CartProvider from "./components/cartProvider/cartProvider";
import TeamPage from "./components/Layout/TeamPage/TeamPage";



function App() {
    return (

        <div className="App">
            <Header/>
            <Switch>
            <Route exact={true} path='/' component={PokemonsPage} />
            <Route exact={true} path='/team' component={TeamPage} />
            </Switch>
        </div>

    );
}

export default App;

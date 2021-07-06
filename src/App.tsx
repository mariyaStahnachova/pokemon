import React from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import {Route, Switch} from "react-router";
import PokemonCard from "./components/Layout/pokemonsPage/PokemonCard";
import PokemonsPage from "./components/Layout/pokemonsPage";
import PokemonInfo from "./components/pocemon-Info/pokemonInfo";
import Modal from "./components/UI/Modal/Modal";



function App() {
    return (

        <div className="App">
            <Header/>
            <Switch>
            <Route exact={true} path='/' component={PokemonsPage} />
            <Route path='/:id' component={PokemonInfo}/>
            </Switch>
        </div>

    );
}

export default App;

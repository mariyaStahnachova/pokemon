import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import axios from "axios";
import PokemonPage from "./components/Layout/pokemonPage";




function App() {

    return (
    <div className="App">
      <Header/>
        {/*{appState && <PokemonPage data={appState}/>}*/}
        <PokemonPage />
      </div>
  );
}

export default App;

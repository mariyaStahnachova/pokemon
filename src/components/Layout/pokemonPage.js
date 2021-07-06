import React, {useCallback, useEffect, useState} from 'react';
import css from './pokemonPage.module.css'
import axios from "axios";
import PokemonCard from "../pokemon-card/PokemonCard";

const PokemonPage = () => {
    const [appState, setAppState] = useState(null)
    const [urls, setUrls] = useState(null)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=2')
            .then(res => {
                setUrls(res.data.results)
            })
    }, [])


    return (
        <div className={css.main}>

            {
                urls && urls.map(e => (
                    <PokemonCard
                        key={e.url}
                        url={e.url}
                        name={e.name}/>
                ))
            }


        </div>

    );
}
// <div className={css.item} key={index}>
//     <img src={`${el}`} alt={'here is pokemon'}/>
// </div>

export default PokemonPage;
// const fetchPokemonData= useCallback(pokemon=>{
//     axios.get(pokemon.url).then(res=>{console.log(res.data.sprites.other.dream_world.front_default);obj.push(res.data.sprites.other.dream_world.front_default)})
// })
//
//
//
// useEffect(()=>{
//     axios.get('https://pokeapi.co/api/v2/pokemon?limit=2')
//         .then(res => (res.data.results))
//         .then(allPokemons=>{
//
//             allPokemons.forEach(pokemon=>{
//                 fetchPokemonData(pokemon);
//             })
//         })
//     console.log(obj)
//     setAppState(obj)
// },[])
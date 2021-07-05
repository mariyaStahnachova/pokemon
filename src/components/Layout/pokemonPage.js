import React, {useCallback, useEffect, useState} from 'react';
import css from './pokemonPage.module.css'
import axios from "axios";

const PokemonPage= () => {
    const [appState, setAppState] =useState([])
    const [urls, setUrls] = useState([])
    const obj = []

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=2')
            .then(res =>{
                 res.data.results.forEach(el=>{
                    obj.push(el.url)
                })
                setUrls(obj)
            })
    },[])

    const fetchData=()=>{
       let obj=[]
       urls.forEach(async (el)=>{
           const res = await axios.get(el)
            obj.push(res.data.sprites.other.dream_world.front_default)
        })
        return obj
    }
     useEffect(()=>{
         const arr = fetchData()
         console.log(arr)
         setAppState(arr)
     },[urls])


    return (
        <div className={css.main}>
            <div className={css.item}>
                <p>what a hell</p>
            </div>
            <div className={css.item}>
                <p> fhldkvgdfv</p>
            </div>

            {appState.map((el,index)=> {
                return <p key={index}>{el}</p>

            })}


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
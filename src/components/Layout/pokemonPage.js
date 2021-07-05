import React, {useEffect, useState} from 'react';
import css from './pokemonPage.module.css'
import axios from "axios";

const PokemonPage= () => {
console.log('loaded')
    const [appState, setAppState] =useState([])
    const [urls, setUrls] = useState([])
    let obj = []

    useEffect(()=>{
        console.log('first use')
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=4&offset=100')
            .then(res =>{
                 res.data.results.forEach(el=>{
                    obj.push(el.url)
                })
                setUrls(obj)
            })
    },[])



const fetchData=()=>{
    let u=[]
    let pic =  urls.map(async (el,index)=>{
       const res = await axios.get(el)
        u.push(res.data.sprites.other.dream_world.front_default)
        return res.data.sprites.other.dream_world.front_default
    })
    console.log(u)
    return u

}
    useEffect(()=>{
        console.log('in useeee')
        let picArr = fetchData()
      console.log(picArr.length)
        setAppState(picArr)
    },[urls])
console.log(appState)
    return (
        <div className={css.main}>
            <div className={css.item}>
                <p>what a hell</p>
            </div>
            <div className={css.item}>
                <p> fhldkvgdfv</p>
            </div>

            {appState.map((el,index)=> {
                return <div className={css.item} key={index}>
                    <img src={`${el}`} alt={'here is pokemon'}/>
                </div>
            })}


        </div>

    );
}

export default PokemonPage;
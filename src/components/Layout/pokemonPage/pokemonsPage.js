import React, { useEffect, useState} from 'react';
import css from './pokemonsPage.module.css'
import axios from "axios";
import PokemonCard from "../pokemonCard/PokemonCard";


const PokemonsPage = () => {
    const [urls, setUrls] = useState(null)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(res => {
                setUrls(res.data.results)
            })
    }, [])

    return (
        <>
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

        </>


    );
}

export default PokemonsPage;

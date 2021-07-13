import {createAction, createReducer} from '@reduxjs/toolkit'

const initialState={
    items:[],
    liked:[],
    amount:0,
    amountLiked:0,
}
export const  add = createAction("ADD")
export const  like = createAction("LIKE")
export const  remove = createAction("REMOVE")


export const mainReducer = createReducer(initialState, {
    [add]:function(state,action){
        console.log(action)
        const existingPokemon = state.items.findIndex(
            el=> {
                return el.name === action.payload.name}
        )
        if (existingPokemon === -1) {
            state.items= state.items.concat(action.payload)
            state.amount= state.amount + 1
        }
    },
    [like]:function(state, action){
        console.log(action)
        const existingPokemon = state.liked.findIndex(
            el=> {
                return el.name === action.payload.name}
        )
        if (existingPokemon === -1) {
            state.liked= state.liked.concat(action.payload)
        }

    },
    [remove]:function(state, action){
        console.log(action)
        const existingPokemonItem = state.items.findIndex(
            el=> {
                return el.name === action.payload}
        )
        if (existingPokemonItem !== -1) {
            state.items = state.items.filter(n => n.name !== action.payload);
            state.amount= state.amount - 1
        }
        const existingPokemonLiked = state.liked.findIndex(
            el=> {
                return el.name === action.payload}
        )
        if (existingPokemonLiked !== -1) {
            state.liked = state.liked.filter(n => n.name !== action.payload);
        }

    }
})
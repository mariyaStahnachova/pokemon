import {createSlice} from '@reduxjs/toolkit'


 const rootSlice = createSlice({
    name: 'slice',
    initialState :{
        items:[],
        liked:[],
        amount:0,
        amountLiked:0,
    },
    reducers:{
        add(state, action){
            const existingPokemon = state.items.findIndex(
                el=> {
                    return el.name === action.payload.name}
            )
            if (existingPokemon === -1) {
                state.items= state.items.concat(action.payload)
                state.amount= state.amount + 1
            }
        },
        like(state, action){
            const existingPokemon = state.liked.findIndex(
                el=> {
                    return el.name === action.payload.name}
            )
            if (existingPokemon === -1) {
                state.liked= state.liked.concat(action.payload)
            }
        },
        remove(state, action){
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
        },

    }
})
export  default  rootSlice.reducer
export const {add, like, remove} = rootSlice.actions
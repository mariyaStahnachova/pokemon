import {appState, actionInterface, UserActionsTypes} from "./types/appTypes";


const ADD='ADD'
const REMOVE='REMOVE'
const LIKE='LIKE'


const initialState: appState ={
    items: [],
    liked:[],
    amount:0,
    amountLiked:0,
}


export const appReducer=(state=initialState,action : actionInterface):appState=>{
    switch (action.type){
        case UserActionsTypes.ADD:{
            let cartItems,totalAmount
            const existingPokemon = state.items.findIndex(
                el=> {
                    // @ts-ignore
                    return el.name === action.item.name}
            )
            if (existingPokemon === -1) {
                // @ts-ignore
                cartItems= state.items.concat(action.item)
                totalAmount= state.amount + 1
            }
            else {
                cartItems = state.items
                totalAmount = state.amount
            }
            return <appState>{
                items: cartItems,
                amount: totalAmount,
                liked: state.liked,
                amountLiked: state.amountLiked
            }}
        case UserActionsTypes.REMOVE :{
            let teamItems, likedItems, totalAmount
            const existingPokemonItem = state.items.findIndex(
                el=> {
                    // @ts-ignore
                    return el.name === action.item}
            )
            if (existingPokemonItem !== -1) {
                // @ts-ignore
                teamItems = state.items.filter(n => n.name !== action.item);
                totalAmount= state.amount - 1
                likedItems = state.liked
            }
            const existingPokemonLiked = state.liked.findIndex(
                el=> {
                    // @ts-ignore
                    return el.name === action.item}
            )
            if (existingPokemonLiked !== -1) {

                // @ts-ignore
                likedItems = state.liked.filter(n => n.name !== action.item);
                teamItems = state.items;
                totalAmount= state.amount
            }
            return <appState>{
                items:teamItems,
                amount: totalAmount,
                liked: likedItems,
                amountLiked:state.amountLiked
            }}
        case UserActionsTypes.LIKE:{
            let likeItems, totalLiked

            const existingPokemon = state.liked.findIndex(
                el=> {
                    // @ts-ignore
                    return el.name === action.item.name}
            )

            if (existingPokemon === -1) {
                // @ts-ignore
                likeItems= state.liked.concat(action.item)
                totalLiked= state.amountLiked + 1
            }
            else {
                likeItems = state.liked
                totalLiked = state.amountLiked
            }
            return <appState>{
                items:state.items,
                amount: state.amount,
                liked: likeItems,
                amountLiked:totalLiked
            }}

        default: return initialState
}}
export const  add=(item:{})=>({type:ADD,item})
export const  like=(item:{})=>({type:LIKE,item})
export const  remove=(item:string)=>({type:REMOVE,item})
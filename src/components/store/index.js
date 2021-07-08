import {createStore} from "redux";

const initialState ={
    items:[],
    liked:[],
    amount:0,
    amountLiked:0,
    remove:()=>{},
    add:()=>{},
    like:()=>{}
}

const appReducer=(state=initialState,action)=>{
    if(action.type === 'ADD'){
        let cartItems, totalAmount
        const existingPokemon = state.items.findIndex(
            el=> {
                return el.name === action.item.name}
        )
        if (existingPokemon === -1) {
            cartItems= state.items.concat(action.item)
            totalAmount= state.amount + 1
        }
        else {
            cartItems = state.items
            totalAmount = state.amount
        }
        return {
            items:cartItems,
            amount: totalAmount,
            liked: state.liked,
            amountLiked: state.amountLiked
        }
    }

    if(action.type === 'REMOVE'){
console.log(action)
        let teamItems, likedItems, totalAmount
        const existingPokemonItem = state.items.findIndex(
            el=> {
                return el.name === action.name}
        )
        console.log(existingPokemonItem,'iteeems')
        if (existingPokemonItem !== -1) {

            teamItems = state.items.filter(n => n.name !== action.name);
            totalAmount= state.amount - 1
            likedItems = state.liked
        }
        const existingPokemonLiked = state.liked.findIndex(
            el=> {
                return el.name === action.name}
        )
        console.log(existingPokemonLiked,'liiked')
        if (existingPokemonLiked !== -1) {

            likedItems = state.liked.filter(n => n.name !== action.name);
            teamItems = state.items;
            totalAmount= state.amount

        }

        return {
            items:teamItems,
            amount: totalAmount,
            liked: likedItems,
            amountLiked:state.amountLiked
        }

    }
    if(action.type==='LIKE'){
        let likeItems, totalLiked

        const existingPokemon = state.liked.findIndex(
            el=> {
                return el.name === action.item.name}
        )

        if (existingPokemon === -1) {
            likeItems= state.liked.concat(action.item)
            totalLiked= state.amountLiked + 1
        }
        else {
            likeItems = state.liked
            totalLiked = state.amountLiked
        }
        return {
            items:state.items,
            amount: state.amount,
            liked: likeItems,
            amountLiked:totalLiked
        }


    }
    return initialState
}
const store = createStore(appReducer)

export default store

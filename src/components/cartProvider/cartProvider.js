import React, {useReducer} from 'react';
import CartContext from "../store/cartContext";


const cartReducer=(state, actions)=>{

    if(actions.type==='add'){
        let cartItems, totalAmount
        const existingPokemon = state.items.findIndex(
            el=> {
                return el.name === actions.item.name}
        )
        if (existingPokemon === -1) {
            cartItems= state.items.concat(actions.item)
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
    if(actions.type==='remove'){

        let teamItems, likedItems, totalAmount
        const existingPokemonItem = state.items.findIndex(
            el=> {
                return el.name === actions.name}
        )
        if (existingPokemonItem !== -1) {

            teamItems = state.items.filter(n => n.name !== actions.name);
            totalAmount= state.amount - 1
            likedItems = state.liked
        }
        const existingPokemonLiked = state.liked.findIndex(
            el=> {
                return el.name === actions.name}
        )
        if (existingPokemonLiked !== -1) {

            likedItems = state.liked.filter(n => n.name !== actions.name);
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
    if(actions.type==='like'){
        let likeItems, totalLiked

        const existingPokemon = state.liked.findIndex(
            el=> {
                return el.name === actions.item.name}
        )

        if (existingPokemon === -1) {
            likeItems= state.liked.concat(actions.item)
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
    return state
}

const CartProvider = (props) => {
    const [cart, dispatchCartState] = useReducer(cartReducer, {
        items:[],
        amount:0,
        liked:[],
        amountLiked:0
    })

    const removePokemon=(name)=>{
        dispatchCartState({type:'remove',name})

    }
    const addPokemon=(item)=>{
        dispatchCartState({type:'add', item})

    }
    const likePokemon=(item)=>{
        dispatchCartState({type:'like',item})
    }
    const initialValue = {
        items:cart.items,
        amount:cart.amount,
        liked:cart.liked,
        amountLiked: 0,
        remove: removePokemon,
        add:addPokemon,
        like:likePokemon
    }

    return (
        <CartContext.Provider value={initialValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
import React from 'react'

const initialValue ={
    items:[],
    liked:[],
    amount:0,
    amountLiked:0,
    remove:()=>{},
    add:()=>{},
    like:()=>{}
}

const CartContext = React.createContext(initialValue);

export default CartContext
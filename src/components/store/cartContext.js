import React, {useContext} from 'react'

const initialValue ={
    items:[],
    amount:0,
    remove:()=>{},
    add:()=>{}
}

const CartContext = React.createContext(initialValue);

export default CartContext
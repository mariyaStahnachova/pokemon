import React, {useReducer} from 'react';
import CartContext from "../store/cartContext";


const cartReducer=(state, actions)=>{
    if(actions.type==='add'){


       const item =  state.items.find(el=>{
           console.log(el)
         // if(el.name === actions.item.name)
         //     return true
        })

        if(item){
          return {
           state
          }
        }else
        return {
            items:state.items.push(actions.item),
            amount: state.amount +1
        }
    }
    if(actions.type==='remove'){

    }
    return state
}

const CartProvider = (props) => {
    const [cart, dispatchCartState] = useReducer(cartReducer, {
        items:[],
        amount:0,
    })

    const removePokemon=(id)=>{
        dispatchCartState({type:'remove',id:id})
        console.log('remove')
    }
    const addPokemon=(item)=>{
        dispatchCartState({type:'add', item:item})
        console.log('adddd')
    }
    const initialValue = {
        items:cart.items,
        amount:cart.amount,
        remove: removePokemon,
        add:addPokemon
    }

    return (
        <CartContext.Provider value={initialValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
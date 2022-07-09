import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { CartReducer } from "./Reducer";

const CartContext = createContext();

const Context = ({children}) => {
     
        <CartContext.Provider>
            {children}
        </CartContext.Provider>

    const [state, dispatch] = useReducer(CartReducer, {
        cart:[]
    })

    return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
}
 

export default Context;

export const CartState = () => {
    return useContext(CartContext)
}
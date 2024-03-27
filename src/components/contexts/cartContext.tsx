import { createContext, useState } from "react";
import { productsProps } from "../../types/productsTypes";

const CartContext = createContext<any>([])

const getCartFromLocalStore = () => {
    if (localStorage.getItem('cart') == null) {
        let cart: productsProps[] = []
        return cart
    }
   
    const cart: productsProps[] = JSON.parse(localStorage.getItem('cart') || '')  
    return cart
}

const CartProvider = (props: any) => {
    const [cart, setCart] = useState(getCartFromLocalStore)

    localStorage.setItem("cart", JSON.stringify(cart))
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
import { useState } from 'react';
import DataContext from "./dataContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user] = useState({ name: 'Blue' });

    // Add product to cart
    function addProductToCart(product, quantity) {
        console.log("Global add", product, quantity);

        const existingProductIndex = cart.findIndex(item => item._id === product._id);
        let newCart;

        if (existingProductIndex >= 0) {
            newCart = [...cart];
            newCart[existingProductIndex].quantity += quantity;
        } else {
            newCart = [...cart, { ...product, quantity }];
        }

        setCart(newCart);
    }

    // Remove product from cart
    function removeProductFromCart(productId) {
        const newCart = cart.filter(item => item._id !== productId);
        setCart(newCart);
    }

    // Clear the cart
    function clearCart() {
        setCart([]);
    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            clearCart: clearCart,
            setCart: setCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;

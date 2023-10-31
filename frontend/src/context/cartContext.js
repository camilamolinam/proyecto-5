import { useState, createContext, useEffect } from "react";
const CartContext = createContext()

const initialState = {
    items: [],
    total: 0,
    amount: 0
}

function CartProvider({ children }) {
    // obtener el carrito del localStorage, si no existe, usar el estado inicial
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || initialState)

    // Vaciar el carrito, se setea el estado inicial
    const emptyCart = () => setCart(initialState)

    // buscar si el producto ya esta en el carrito, obtener su posicion
    const findProductInCart = (product) => {

        return cart.items.findIndex(item => item._id === product._id)
    }

    // Agregar un producto al carrito
    const addProductToCart = (product) => {
        // buscar si el producto ya esta en el carrito, obtener su posicion
        const itemPosition = findProductInCart(product)

        // si el producto ya esta en el carrito, aumentar su cantidad
        if (itemPosition !== -1) {
            cart.items[itemPosition].quantity += 1

        } else { // si el producto no esta en el carrito, agregarlo al carrito y aumentar el total de productos 
            cart.items.push({ ...product, quantity: 1 }) // agregar el producto al carrito con cantidad 1
            cart.total += 1 // aumentar el total de productos
        }

        // aumentar el total a pagar
        cart.amount += product.precio

        // actualizar el estado del carrito, el hook useEffect se encarga de actualizar el localStorage
        setCart({ ...cart })
        console.log(cart)
        //setCart( {items: cart.items, total: cart.total, amount: cart.amout} )
    }

    // Eliminar un producto del carrito
    const deleteProductFromCart = (product) => {
        // buscar si el producto ya esta en el carrito, obtener su posicion
        const itemPosition = findProductInCart(product)

        // si itemPosition no es -1, eliminar el producto del carrito
        if (itemPosition !== -1) {
            cart.items.splice(itemPosition, 1)
            cart.total -= 1
            cart.amount -= product.precio


            // actualizar el estado del carrito, el hook useEffect se encarga de actualizar el localStorage
            setCart({ ...cart })
        }

    }

    const decreaseProductFromCart = (product) => {
        // buscar si el producto ya esta en el carrito, obtener su posicion
        const itemPosition = findProductInCart(product)

        // si itemPosition no es -1, decrementar la cantidad del producto y el total a pagar
        if (itemPosition !== -1) {
            if (cart.items[itemPosition].quantity === 1) {
                deleteProductFromCart(product)
            } else {
                cart.items[itemPosition].quantity -= 1
                cart.amount -= product.precio

                // actualizar el estado del carrito, el hook useEffect se encarga de actualizar el localStorage
                setCart({ ...cart })
            }
        }

    }

    // hook useEffect que se ejecuta cada vez que cambie el estado del carrito, cada setCart
    useEffect(() => {
        // actualizar el localStorage
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, emptyCart, addProductToCart, deleteProductFromCart, decreaseProductFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
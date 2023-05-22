//* Importing module 
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js"
// addToCart('bread', 5)
// console.log(price, tq)

/*
import shoppingCart from "./shoppingCart";

console.log('Importing module')
    // console.log(shippingCost)

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice)

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'
// console.log(price)

import add, { cart } from './shoppingCart.js'
add('pizza', 2)
add('bread', 5)
add('apples', 4)


console.log(cart)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json()
// console.log(data)

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)

    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastPost = getLastPost();
console.log(lastPost)

// Not very clean 
// lastPost.then(last => console.log(last))

const lastPost2 = await getLastPost()
console.log(lastPost2)
*/

//* The Module pattern
const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10
    const totalPrice = 237
    const totalQuantity = 23

    const addToCart = function(product, quantity) {
        const cart = []; // Initialize the `cart` variable as an empty array
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (shipping cost ${shippingCost})`);
    };

    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})()

shoppingCart2.addToCart('apple', 4)
shoppingCart2.addToCart('pizza', 2)
console.log(shoppingCart2)
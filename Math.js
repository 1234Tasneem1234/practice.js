const cart = [
    { name: "laptop", price: 50000, color: "black", quantity: 1},
    { name: "shirt", price: 400, color: "white", quantity: 11},
    { name: "watch", price: 4000, color: "dark-blue", quantity: 9},
    { name: "phone", price: 15000, color: "silver", quantity: 4}
]
let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
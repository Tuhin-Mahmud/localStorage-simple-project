// const addProduct = () => {
//     const productField = document.getElementById('product-field')
//     const quantityField = document.getElementById('quantity-field');
//     const product = productField.value
//     const quantity = quantityField.value;
//     productField.value = '';
//     quantityField.value = '';
//     // console.log(product, quantity);
//     displayProduct(product, quantity);
//     saveProductToLocalStorage(product, quantity)
// }

// const displayProduct = (product, quantity) => {
//     console.log(product, quantity);
//     const ul = document.getElementById('product-container')
//     const li = document.createElement('li')
//     li.innerText = `${product}${quantity}`;
//     ul.appendChild(li);
// }

// const getStoredShoppingCart = () => {
//     let cart = {};
//     const storedCart = localStorage.getItem('cart')
//     if (storedCart) {
//         cart = JSON.parse(storedCart)
//     }
//     return cart
// }

// const saveProductToLocalStorage = (product, quantity) => {
//     const cart = getStoredShoppingCart()
//     cart[product] = quantity;
//     const stringified = JSON.stringify(cart)
//     localStorage.setItem('cart', stringified)

// }

// const displayProductFromLocalStorage = () => {
//     const saveCart = getStoredShoppingCart();
//     console.log(saveCart);
//     for (const product in saveCart) {
//         const quantity = saveCart[product]
//         console.log(product, quantity);
//         displayProduct(product, quantity)
//     }
// }

// displayProductFromLocalStorage()
// addProduct()

const addProduct = () => {
    const productField = document.getElementById('product-field')
    const quantityField = document.getElementById('quantity-field')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) => {
    console.log(product, quantity);
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`
    ul.appendChild(li)
}

const getStoreShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    // const cart = getStoreShoppingCart()
    // cart[product] = quantity
    // const stringified = JSON.stringify(cart)
    // localStorage.setItem('cart', stringified)
    const cart = getStoreShoppingCart()
    cart[product] = quantity;
    const stringified = JSON.stringify(cart)
    localStorage.setItem('cart', stringified)
}

const displayProductFromLocalStorage = () => {
    const saveCart = getStoreShoppingCart()
    console.log(saveCart);
    for (const product in saveCart) {
        // console.log(product);
        const quantity = saveCart[product]
        displayProduct(product, quantity)
    }
}


displayProductFromLocalStorage()
addProduct()
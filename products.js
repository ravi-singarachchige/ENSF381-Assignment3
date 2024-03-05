// Initialize an empty cart
let cart = {};

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Add event listeners to "Remove" buttons
document.querySelectorAll('.cart-item button').forEach(button => {
    button.addEventListener('click', removeFromCart);
});

function addToCart(event) {
    // Get product details
    let product = event.target.parentElement;
    let name = product.querySelector('h2').innerText;
    let price = product.querySelector('.price').innerText;

    // Check if item is already in cart
    if (cart[name]) {
        // Increase quantity by 1
        cart[name].quantity += 1;
    } else {
        // Add item to cart
        cart[name] = {
            price: price,
            quantity: 1
        };
    }

    // Update cart display
    updateCart();

    // Display alert
    alert(name + ' has been added to the cart.');
}

function removeFromCart(event) {
    // Get product name
    let name = event.target.parentElement.querySelector('.cart-item-name').innerText;

    // Decrease quantity or remove item from cart
    if (cart[name].quantity > 1) {
        cart[name].quantity -= 1;
    } else {
        delete cart[name];
    }

    // Update cart display
    updateCart();
}

function updateCart() {
    // Get cart display element
    let cartDisplay = document.querySelector('.cart');

    // Clear cart display
    cartDisplay.innerHTML = '';

    // Add title to cart
    let title = document.createElement('h2');
    title.innerText = 'Shopping Cart';
    cartDisplay.appendChild(title);

    // Add items to cart display
    for (let name in cart) {
        let item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <span class="cart-item-name">${name}</span>
            <span class="cart-item-price">${cart[name].price}</span>
            <span class="cart-item-quantity">${cart[name].quantity}</span>
            <button>Remove</button>
        `;
        cartDisplay.appendChild(item);
    }

    // Add event listeners to new "Remove" buttons
    document.querySelectorAll('.cart-item button').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}
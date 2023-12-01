window.onload = function() {

  document.getElementById('menus').contentEditable = false

}
let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    displayCartItems();
    updateCartTotal();
}
// let cart = JSON.parse(localStorage.getItem('cartarray'))??[];
// // if (localStorage.getItem("cart")) {
// //     // cart = JSON.parse(localStorage.getItem("cart"));
// //     displayCartItems();
// //     updateCartTotal();
// // }

function addToCart(itemName, itemPrice) {



    if (cart[itemName]) {
        alert(`${itemName} is already in the cart!`);
    } else {
        cart[itemName] = { price: itemPrice, quantity: 1 };
        // localStorage.setItem('cart', JSON.stringify(cart))
        displayCartItems();
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${itemName} is added to the cart!`);
    }
}


function displayCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";


    for (let itemName in cart) {
        const item = cart[itemName];
        //     for (itemName in cart) {
        //         const item = cart[itemName];


        const cartRow = document.createElement("div");
        cartRow.classList.add("cart-row");

        const cartRowHTML = `
        <div class="cart-item cart-column">
          <span class="cart-item-title">'${itemName}'</span>
        </div>
        <span class="cart-price cart-column">$${item.price.toFixed(2)}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="${
            item.quantity
          }" data-item-name="${itemName}">
          <button onclick="removeFromCart('${itemName}')" class="btn btn-danger">REMOVE</button>
        </div>
      `;

        cartRow.innerHTML = cartRowHTML;
        cartItemsContainer.append(cartRow);
    }

    let quantityInputs = document.querySelectorAll(".cart-quantity-input");
    quantityInputs.forEach((input) => {
        input.addEventListener("change", (event) => {
            let newQuantity = parseInt(event.target.value);
            let itemName = event.target.getAttribute("data-item-name");
            console.log(`Item Name: ${itemName}, New Quantity: ${newQuantity}`);
            updateQuantity(itemName, newQuantity);
        });
    });
}

function removeFromCart(itemName) {
    delete cart[itemName];
    displayCartItems();
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartTotal() {
    let total = 0;
    for (let itemName in cart) {
        total += cart[itemName].price * cart[itemName].quantity;
    }

    document.querySelector(".cart-total-price").innerText =
        "$" + total.toFixed(2);
}

function clearCart() {
    cart = {};
    localStorage.removeItem("cart");
    displayCartItems();
    updateCartTotal();
}

function updateQuantity(itemName, quantity) {
    if (cart[itemName]) {
        cart[itemName].quantity = quantity;
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}
let quantityInputs = document.querySelectorAll(".cart-quantity-input");
quantityInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        let newQuantity = parseInt(event.target.value);
        let itemName = event.target.getAttribute("data-item-name");
        console.log(`Item Name: ${itemName}, New Quantity: ${newQuantity}`);
        updateQuantity(itemName, newQuantity);
    });
});

function updateQuantity(itemName, quantity) {
    if (cart[itemName]) {
        cart[itemName].quantity = quantity;
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}



function purchaseProducts() {
    let completecart = document.getElementById('cart')
    localStorage.setItem("cart", completecart.outerHTML);
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
    } else {
        location.replace("payment.html");
    }
}


//Payment page


function openForm1() {
    document.getElementById('forms').style.display = "block"
    document.getElementById('cardcredit').style.display = "none"
    document.getElementById('cash').style.display = "block"
};

function openForm2() {
    document.getElementById('forms').style.display = "block"
    document.getElementById('cardcredit').style.display = "block"
    document.getElementById('cash').style.display = "none"
};

function closeForm1() {
    document.getElementById('forms').style.display = "none";
    alert("Thank you for your purchase!")
    window.location.assign("/receipt.html")
};

function closeForm2() {
    document.getElementById('forms').style.display = "none"
    alert("Thank you for your purchase!")
    window.location.assign("/receipt.html")
};

function back() {
    document.getElementById('forms').style.display = "none"
}


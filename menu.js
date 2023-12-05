window.onload = function() {

  document.getElementById('menus').contentEditable = false

}
let cart = {};
var parentElement = item.parentNode;
var itemName = parentElement.children[0].textContent;
var itemPrice = parentElement.children[1].textContent;
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    displayCartItems();
    updateCartTotal();
}

function addToCart(item) {
    
    if (cart[itemName]) {
        alert(`${itemName} is already in the cart!`);
    } else {
        cart[itemName] = { price: itemPrice, quantity: 1 };
        console.log(cart);
        displayCartItems();
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${parentElement} is added to the cart!`);
    }
}


function displayCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";


  for (let itemName in cart) {
    const item = cart[itemName];



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
          <button onclick="removeFromCart('${itemName}')" class="btn btn-danger" type="button">REMOVE</button>
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

function removeFromCart() {
    delete cart[itemName];
    displayCartItems();
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartTotal() {
    let total = 0;
    for (let itemName in cart) {
      if(isNaN){
        total += cart[itemName].price * cart[itemName].quantity;
      }
        
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

function updateQuantity(quantity) {
    if (cart[itemName]) {
        cart[itemName].quantity = quantity;
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}
// let quantityInputs = document.querySelectorAll(".cart-quantity-input");
// quantityInputs.forEach((input) => {
//     input.addEventListener("change", (event) => {
//         let newQuantity = parseInt(event.target.value);
//         let itemName = event.target.getAttribute("data-item-name");
//         console.log(`Item Name: ${itemName}, New Quantity: ${newQuantity}`);
//         updateQuantity(itemName, newQuantity);
//     });
// });

// function updateQuantity(quantity) {
//     if (cart[itemName]) {
//         cart[itemName].quantity = quantity;
//         updateCartTotal();
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }
// }



function purchaseProducts() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        location.replace("payment.html");
        // document.getElementsByClassName("cart-quantity-input").disabled = true;
    }

}